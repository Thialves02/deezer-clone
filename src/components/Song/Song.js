import React, { useContext, useMemo, useState } from 'react'
import './Song.css'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import fav from '../../assets/images/fav.png'
import full from '../../assets/images/full.png'
import { Context } from '../../context/CtxApp'

export default function Song({cover,title,artist,duration,fullSong,preview}) {
    const {favs, setFavs} = useContext(Context)
    const [click, setClick] = useState(false)

    const audio = useMemo(() => new Audio(preview),[preview])

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
    }

    return (
        <>
        <div className="container-song">
            <img src={cover} alt={title}/>
            <div className={click ? 'pause' : 'play'} >
                <img src={click ? pause : play} onClick={start} alt='play and pause'/>
            </div>
            <div className="fav" >
                <form onSubmit={favorite}>
                    <button type="submit"><img src={fav} alt='fav button'/></button>
                </form>
            </div>
            <a href={fullSong} target="_blank" without rel="noreferrer">
                <div className="full">
                    <img src={full} alt='full song'/>
                </div>
            </a>
            <h1>{title}</h1>
            <h2>by {artist}</h2>
            <h3>Duration {duration}</h3>   
        </div>
        </>
    )
}
