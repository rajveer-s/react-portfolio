import React from 'react'
import DarkMode from '../darkmode/Darkmode'
import HeaderEffect from '../typewriting/Typerwriting'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div id="navbar">
      
        <div id="headerName">
          <h1>Rajveer Singh</h1>
          </div>
            <HeaderEffect />
            
            <ul>
                <a href="/">About</a>
                <a href="/skills">Skills</a>
                <a href="/work">Work</a>
                <a href="/contact">Contact</a>
                <DarkMode />
            </ul>
            
        </div>
  )
}

export default Navbar