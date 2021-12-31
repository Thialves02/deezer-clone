import React from 'react'
import LateralMenu from '../LateralMenu/LateralMenu'
import Menu from '../Menu/Menu'
import './Menus.css'

export default function Menus() {
    return (
        <div className='container-menus'>
           <Menu/>
           <LateralMenu/> 
        </div>
    )
}
