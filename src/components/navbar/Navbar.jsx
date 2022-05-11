import React from 'react'

const Navbar = () => {
  return (
    <div id="navbar">
        <div id="headerName">
          <h1>Rajveer Singh</h1>
          </div>
            <h5 id="headerH5">Web Developer</h5> 
            <ul>
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/work">Work</a>
                <a href="/contact">Contact</a>
            </ul>
        </div>
  )
}

export default Navbar