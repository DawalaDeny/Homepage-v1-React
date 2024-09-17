import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='nav-container'>
      <h2>
        Dawala<span className='naam'>Deny</span>
      </h2>
      <ul className='links'>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      </div>
    </header>
  )
}

export default Header
