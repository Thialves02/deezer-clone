import React, { useContext, useState } from 'react'
import './Song.css'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import fav from '../../assets/images/fav.png'
import full from '../../assets/images/full.png'
import { Context } from '../../context/CtxApp'

export default function Song({cover,title,artist,duration,fullSong,preview}) {
    
    const {favs, setFavs} = useContext(Context)
    const [click, setClick] = useState(false)
    /* const [audio, setAudio] = useState(new Audio(preview)) */
    const [playing, setPlaying] = useState(false)
    const audio = new Audio(preview)
    
    const start = () => {
        if (!click){
            audio.play()
        }else{
            audio.pause()
        }  
        setClick(!click)
    }

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
        console.log(favs)

    }

    return (
        <>
        <div className="container-song">
            <img src={cover} />
            <div className={click ? 'pause' : 'play'} >
                <img src={click ? pause : play} onClick={start} />
            </div>
            <div className="fav" >
                <img src={fav}/>
            </div>
            <a href={fullSong} target="_blank">
                <div className="full">
                    <img src={full}/>
                </div>
            </a>
            <h1>{title}</h1>
            <h2>by {artist}</h2>
            <h3>Duration {duration}</h3>
            <form onSubmit={favorite}>
                <button type="submit">ENVIAR</button>
            </form>
        </div>
        </>
    )
}
