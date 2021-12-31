import React, { useEffect, useState } from 'react'
import Song from '../Song/Song'
import './Songs.css'
import { Context } from '../../context/CtxApp'
import { useContext } from 'react'
export default function Songs() {
    
    const { songs } = useContext(Context)

    return (
        <div className='container-songs'>
            <h1>Popular songs</h1>
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
