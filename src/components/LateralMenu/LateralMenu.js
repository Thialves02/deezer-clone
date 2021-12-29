import React from 'react'
import Promo from '../Promo/Promo'
import './LateralMenu.css'

export default function LateralMenu() {
    return (
        <div className="container-lateralMenu">
            <img src="https://logodownload.org/wp-content/uploads/2018/03/deezer-logo-8.png" alt='Logo'></img>
            <Promo/>
            <div className='favorite'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Heart_font_awesome.svg/1200px-Heart_font_awesome.svg.png" alt='Favorites'/>
                <p>Favorites</p>
            </div>
        </div>
    )
}
