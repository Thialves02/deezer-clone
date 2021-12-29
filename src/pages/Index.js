import React from 'react'
import LateralMenu from '../components/LateralMenu/LateralMenu'
import Menu from '../components/Menu/Menu'
import Songs from '../components/Songs/Songs'
import './Index.css'

export default function Index() {
    return (
        <div className='container-Home'>
            <div className='container-Home-Menus'>
                <LateralMenu/>
                <div className='container-menu-songs'>
                    <Menu/>
                    <Songs/>
                </div>
                
            </div>
            
        </div>
    )
}