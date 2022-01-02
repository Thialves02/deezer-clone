import React, { useContext, useState } from 'react'
import play from '../../assets/images/play.png'
import pause from '../../assets/images/pause.png'
import favDelete from '../../assets/images/favDelete.png'
import full from '../../assets/images/full.png'
import { Context } from '../../context/CtxApp'
export default function Favorite({cover,title,artist,duration,fullSong,preview,key}) {
    const [click, setClick] = useState(false)
    const { favs, setFavs } = useContext(Context)
    
    console.log(key)
    const audio = new Audio(preview)

    const start = () => {
        if (!click){
            audio.play()
        }else{
            audio.pause()
        }  
        setClick(!click)
    }
    
    const Delete = (key) => {
        
        setFavs(favs.filter((song,indexSong)=>
        key!== indexSong
        ))
        
    }

    return (
        <div>
            <div className="container-song">
                    <img src={cover} />
                    <div className={click ? 'pause' : 'play'} >
                        <img src={click ? pause : play} onClick={start} />
                    </div>
                    <div className="fav" >
                        <button type="submit" onClick={() => Delete(key)}><img src={favDelete}/></button>
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
        </div>
    )
}
