import React from 'react'
import './Song.css'
import play from '../../assets/images/play.png'
import fav from '../../assets/images/fav.png'
import full from '../../assets/images/full.png'

export default function Song({cover,title,artist,duration,fullSong,preview}) {
    return (
        <>
        <div className="container-song">
            <img src={cover}/>
            <div className="play">
                <img src={play}/>
            </div>
            <div className="fav">
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
