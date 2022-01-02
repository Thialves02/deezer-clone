import React, { useContext, useState } from 'react'
import { Context } from '../../context/CtxApp'
import './FavoriteSongs.css'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import favDelete from '../../assets/images/favDelete.png'
import full from '../../assets/images/full.png'
import Favorite from '../Favorite/Favorite'

export default function FavoriteSongs() {
    const { favs, setFavs } = useContext(Context)

    const Delete = (index) => {
        setFavs(favs.filter((song,indexSong)=>
        index!== indexSong
        ))
        
    }
    return (
        <div className='container-songs'>
            <div className='container-musics'>
                {favs.map((favs,index)=>(
                    <div className="container-song">
                    <img src={favs.cover} />
                    <div className="favs-fav" >
                        <button type="submit" onClick={() => Delete(index)}><img src={favDelete}/></button>
                    </div>
                    <a href={favs.link} target="_blank">
                        <div className="favs-full">
                            <img src={full}/>
                        </div>
                    </a>
                    <h1>{favs.title}</h1>
                    <h2>by {favs.artist}</h2>
                    <h3>Duration {favs.duration}</h3>       
                </div>
                ))}
                {favs.length<= 0 &&
                <div>
                    <h1 className="favorite-subtitle">You didn't have added favorite songs </h1>
                </div>
                }
            </div>
        </div>
    )
}
