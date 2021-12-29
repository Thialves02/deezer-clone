import React from 'react'
import './Song.css'

export default function Song({song}) {
    return (
        <>
        <div className="container-song">
            <img src="https://images.genius.com/666e9223b7997ecc8fef930e3de3f84b.1000x1000x1.png"/>
            <h1>Call me</h1>
            <h2>by Leozin</h2>
            <h3>Duration 2:41</h3>
        </div>
        <div className="container-song">
            <img src="https://images.genius.com/666e9223b7997ecc8fef930e3de3f84b.1000x1000x1.png"/>
            <h1>Call me</h1>
            <h2>by Leozin</h2>
            <h3>Duration 2:41</h3>
        </div>
        </>
    )
}
