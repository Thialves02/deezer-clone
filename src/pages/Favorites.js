import React from 'react'
import FavoriteSongs from '../components/FavoriteSongs/FavoriteSongs'

export default function Favorites() {
    return (
        <div className="song">
            <h1 className='songs-title'>Favorites</h1>
            <FavoriteSongs/>
        </div>
    )
}
