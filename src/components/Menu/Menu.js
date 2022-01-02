import React, {  useState } from 'react'
import './Menu.css'
import { useContext } from "react"
import { Context } from "../../context/CtxApp"
import Promo from '../Promo/Promo'
import { Link, useHistory } from 'react-router-dom'
import './LateralMenu.css'
import menu from '../../assets/images/menu.png'
import logoTop from '../../assets/images/logoTop.png'
import logo from '../../assets/images/logo.png'
import fav from '../../assets/images/favDelete.png'
import searchSong from '../../assets/images/search.png'

export default function Menu() {
    const { setSongs } = useContext(Context)
    const [open, setOpen ] = useState(false)
    const history = useHistory()
    
    const search = async (e) =>{
        e.preventDefault()

        const searchSong = e.target.searchSong.value
        if (searchSong === ''){
            const response = await fetch (
                `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/2`
            )
            history.push('/')
            const body = await response.json()
            setSongs(body.tracks.data)
            
        }else{
            const response = await fetch (
                `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchSong}`
            )
            history.push('/')
            const body = await response.json()
            setSongs(body.data)
        }
        
    }

    const Menu = () =>{
        setOpen(!open)
    }
    const closeMenu = () =>{
        setOpen(false)
    }

    return (
        <div className='container-menus'>
            <div className={!open ? 'container-lateralMenu' : 'container-lateralMenuOpen'}>
                <Link to="/">
                    <img src={logo} alt='Logo' className='logo'></img>
                </Link>
                <Promo/>
                <Link to='favorites'>
                <div className='favorite' onClick={closeMenu}>
                    <img src={fav} alt='Favorites'/>
                    <p>Favorites</p>
                </div>
                </Link>
            </div>
            <div className='container-Menu'>
                <div className='Menu-Search'>
                    <Link to='/'>
                        <img src={logoTop} className='logoTop' onClick={closeMenu} alt='logo top'/>
                    </Link>
                    <img src={searchSong} alt='search song'/>
                    <form onSubmit={search}>
                        <input type="text" placeholder="Search" name='searchSong'/>
                    </form>
                </div>
                <div className='Menu-infos'>           
                    <img src={menu} className='menu' onClick={Menu} alt='menu'/>
                </div>
            </div>
        </div>
    )
}
