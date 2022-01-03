import React, { useContext } from 'react'
import { Context } from '../../context/CtxApp'
import './FavoriteSongs.css'
import favDelete from '../../assets/images/favDelete.png'
import full from '../../assets/images/full.png'


export default function FavoriteSongs() {
    const { favs, setFavs} = useContext(Context)

    const Delete = (index) => {
        setFavs(favs.filter((song,indexSong)=>
        index!== indexSong
        ))
    }
    
    return (
        <div className='container-songs'>
            <div className='container-musics'>
                {favs.map((favs,index)=>(
                    <div className="container-song" key={index}>
                    <img src={favs.cover} alt={favs.title}/>
                    <div className="favs-fav" >
                        <button type="submit" onClick={() => Delete(index)}><img src={favDelete} alt='delete'/></button>
                    </div>
                    <a href={favs.link} target="_blank" without rel="noreferrer">
                        <div className="favs-full">
                            <img src={full} alt='full song'/>
                        </div>
                    </a>
                    <h1>{favs.title}</h1>
                    <h2>by {favs.artist}</h2>       
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
