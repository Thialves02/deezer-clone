import React from 'react'
import Song from '../Song/Song'
import './Songs.css'
import { Context } from '../../context/CtxApp'
import { useContext } from 'react'
export default function Songs() {
    
    const { songs, setSongs } = useContext(Context)

    if (songs.length === 0){
        const getSongs = async () =>{
            const response = await fetch (
                `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/2`
            )
            
            const body = await response.json()
            setSongs(body.tracks.data)
        }
        getSongs()
    }
    
    return (
        <div className='container-songs'>
            
            <div className='container-musics'>
            {songs.map((song,index) =>(
                <Song
                key={index}
                cover={song.album.cover_big}
                title={song.title}
                artist={song.artist.name}
                duration={song.duration}
                fullSong={song.link}
                preview={song.preview}
                />
            ))}
            </div>
            {songs.length<= 0 &&
            <div>
                Loading...
            </div>
            }
        </div>
    )
}
