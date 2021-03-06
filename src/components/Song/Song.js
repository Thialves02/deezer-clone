import React, { useContext, useMemo, useState } from 'react'
import './Song.css'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import fav from '../../assets/images/fav.png'
import favDelete from '../../assets/images/favDelete.png'
import full from '../../assets/images/full.png'
import { Context } from '../../context/CtxApp'

export default function Song({cover,title,artist,duration,fullSong,preview}) {
    const {favs, setFavs,setCurrent} = useContext(Context)
    const [click, setClick] = useState(false)
    const [favClick, setFavClick] = useState(false)

    const audio = useMemo(() => new Audio(preview),[preview])

    const start = () => {
        if (!click){
            audio.play()
            setCurrent({cover,title})            
        }else{
            audio.pause()
        }  
        setClick(!click)
    }

    const values = favs.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null))

    const favorite = (e) => {
        e.preventDefault()

        setFavs([
            ...favs,{
                cover:cover,
                title:title,
                artist:artist,
                duration:duration,
                link:fullSong,
                preview:preview
            }   
        ])
    }
    
    if(values.length < favs.length){
        setFavs(values)
    }
    
    var minutes = Math.floor(duration / 60)
    var seconds = duration - minutes * 60;

    function str_pad_left(string,pad,length) {
        return (new Array(length+1).join(pad)+string).slice(-length);
    }

    const Fav = () =>{
        setFavClick(!favClick)
        if(favClick == true){
            setFavClick(true)
        }
    }

    var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);

    return (
        <>
        <div className="container-song">
            <img src={cover} alt={title}/>
            <div className={click ? 'pause' : 'play'} >
                <img src={click ? pause : play} onClick={start} alt='play and pause'/>
            </div>
            <div className="fav" onClick={Fav}>
                <form onSubmit={favorite}>
                    <button type="submit"><img src={favClick ? favDelete : fav} alt='fav button'/></button>
                </form>
            </div>
            <a href={fullSong} target="_blank" without rel="noreferrer">
                <div className="full">
                    <img src={full} alt='full song'/>
                </div>
            </a>
            <h1>{title}</h1>
            <h2>by {artist}</h2>
            <h3>Duration {finalTime}</h3>   
        </div>
        </>
    )
}
