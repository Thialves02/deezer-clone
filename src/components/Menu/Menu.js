import React, { useEffect } from 'react'
import './Menu.css'
import { useContext } from "react"
import { Context } from "../../context/CtxApp"
import Promo from '../Promo/Promo'
import { Link } from 'react-router-dom'
import './LateralMenu.css'

export default function Menu() {
    const { setSongs } = useContext(Context)
    
    const search = async (e) =>{
        e.preventDefault()

        const searchSong = e.target.searchSong.value
        const response = await fetch (
            `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchSong}`
        )
        
        const body = await response.json()
        setSongs(body.data)
    }
    return (
        <div className='container-menus'>
            <div className="container-lateralMenu">
                <Link to="/">
                    <img src="https://logodownload.org/wp-content/uploads/2018/03/deezer-logo-8.png" alt='Logo'></img>
                </Link>
                <Promo/>
                <Link to='favorites'>
                <div className='favorite'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Heart_font_awesome.svg/1200px-Heart_font_awesome.svg.png" alt='Favorites'/>
                    <p>Favorites</p>
                </div>
                </Link>
            </div>
            <div className='container-Menu'>
                <div className='Menu-Search'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Search_font_awesome.svg/1024px-Search_font_awesome.svg.png'/>
                    <form onSubmit={search}>
                        <input type="text" placeholder="Search" name='searchSong'/>
                    </form>
                </div>
                <div className='Menu-infos'>
                    {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bell_alt_font_awesome.svg/1024px-Bell_alt_font_awesome.svg.png' className='bell'/> */}
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1982px-Font_Awesome_5_solid_user-circle.svg.png' className='profile'/>
                </div>
            </div>
        </div>
    )
}
