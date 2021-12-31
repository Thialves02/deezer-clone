import React from 'react'
import './Menu.css'
import { useContext } from "react"
import { Context } from "../../context/CtxApp"

export default function Menu() {
    const { setSongs } = useContext(Context)

    const search = async (e) =>{
        e.preventDefault()

        const searchSong = e.target.searchSong.value
        const response = await fetch (
            `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${searchSong}`
        )
        
        const body = await response.json()
        setSongs(body.tracks.data)
        
    }
    return (
        <div className='container-Menu'>
            <div className='Menu-Search'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Search_font_awesome.svg/1024px-Search_font_awesome.svg.png'/>
                <form onSubmit={search}>
                    <input type="text" placeholder="Search" name='searchSong'/>
                </form>
            </div>
            <div className='Menu-infos'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bell_alt_font_awesome.svg/1024px-Bell_alt_font_awesome.svg.png' className='bell'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1982px-Font_Awesome_5_solid_user-circle.svg.png' className='profile'/>
            </div>
        </div>
    )
}
