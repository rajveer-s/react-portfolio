import React from 'react'

// todo - import links from react-router-dom and replace hrefs with links

const Navbar = () => {
  return (
    <div id="navbar">
        <div id="headerName">
          <h1>Rajveer Singh</h1>
          </div>
            <h5 id="headerH5">Web Developer</h5> 
            <ul>
                <a href="/">About</a>
                <a href="/skills">Skills</a>
                <a href="/work">Work</a>
                <a href="/contact">Contact</a>
            </ul>
        </div>
  )
}

export default Navbar