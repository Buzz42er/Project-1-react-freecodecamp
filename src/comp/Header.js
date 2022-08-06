import React from 'react'
import Logo from './Logo.js'

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Logo/>
          <ul className="navUl">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
