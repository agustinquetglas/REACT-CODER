import React from 'react'
import './NavBar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <nav>
        <h1>"Primer proyecto e-comerce"</h1>
        <ul className='navbar-list'>
            <li className='list-item'><a className='section-item' href="">Section 1</a></li>
            <li className='list-item'><a className='section-item' href="">Section 2</a></li>
            <li className='list-item'><a className='section-item' href="">Section 3</a></li>
            <li className='list-item'><CartWidget /></li>
        </ul>
        <div className='IMG'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKM1wU4Nan_PZmVW8u8-piEkAh5TAqp3PvQ&s" alt="Img-messi" />
        </div>

    </nav>
  )
}

export default NavBar;
