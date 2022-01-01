import React from 'react'
import Songs from '../components/Songs/Songs'
import './Index.css'

export default function Index() {
    return (
        <div className="song">
            <h1 className='songs-title'>Popular songs</h1>
            <Songs/>
        </div>
    )
}
