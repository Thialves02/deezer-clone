import React, { useState } from 'react'
import './Song.css'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import fav from '../../assets/images/fav.png'
import full from '../../assets/images/full.png'

export default function Song({cover,title,artist,duration,fullSong,preview}) {
    
    const [click, setClick] = useState(false)
    /* const [audio, setAudio] = useState(new Audio(preview)) */
    const audio = new Audio(preview)
    
    console.log(preview)
    const start = () => {
        if (!click){
            audio.play()
        }else{
            audio.pause()
            console.log('aa')
        }  
        setClick(!click)
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
        </div>
        </>
    )
}
