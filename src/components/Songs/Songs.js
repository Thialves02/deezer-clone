import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api'
import Song from '../Song/Song'
import './Songs.css'

export default function Songs() {
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        const loadSongs = async () => {
            const response = await fetch(
                'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0'
            );
            const data = await response.json()
            setSongs(data.tracks.data)
            console.log(data.tracks.data);
        }
        loadSongs();
    },[])
    return (
        <div className='container-songs'>
            <h1>Popular songs</h1>
            {/* {songs.map((song,index) =>(
                <Song
                key={index}
                song={song}
                />
            ))} */}
            <Song/>
        </div>
    )
}
