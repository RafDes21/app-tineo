import React from 'react'
import logo from '../logo.svg'
import './NavBar.css'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-alert-dark alert-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="" width="60" height="60"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Disabled</a>
        </li>
        <CartWidget/>
      </ul>
      </div>
      
  </div>
</nav>
    
  )
}
