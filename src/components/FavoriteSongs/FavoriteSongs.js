import React, { useContext, useState } from 'react'
import { Context } from '../../context/CtxApp'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import fav from '../../assets/images/fav.png'
import full from '../../assets/images/full.png'

export default function FavoriteSongs() {
    const { favs, setFavs } = useContext(Context)
    const [click, setClick] = useState(false)
    const audio = new Audio(favs.preview)

    const start = () => {
        if (!click){
            audio.play()
        }else{
            audio.pause()
        }  
        setClick(!click)
    }
    
    const Delete = (index) => {
        setFavs(favs.filter((song,indexSong)=>
        index!== indexSong
        ))
    }
    console.log(favs)
    return (
        <div className='container-songs'>
            <div className='container-musics'>
                {favs.map((favs,index)=>(
                    <div className="container-song" key={index}>
                    <img src={favs.cover} />
                    <div className={click ? 'pause' : 'play'} >
                        <img src={click ? pause : play} onClick={start} />
                    </div>
                    <div className="fav" >
                        <img src={fav}/>
                    </div>
                    <a href={favs.fullSong} target="_blank">
                        <div className="full">
                            <img src={full}/>
                        </div>
                    </a>
                    <h1>{favs.title}</h1>
                    <h2>by {favs.artist}</h2>
                    <h3>Duration {favs.duration}</h3>
                    <button type="submit" onClick={() => Delete(index)}>DELETE</button>
                </div>
                ))}
            </div>
        </div>
    )
}
