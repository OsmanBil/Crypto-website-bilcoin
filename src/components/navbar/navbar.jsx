import React, { Component } from 'react';
import "./navbar.css"

class Navbar extends Component {
  state = {}
  render() {
    return <nav className="navbar-content">
      
        <a className="navbar-logo text-light" href="/">Bilcoin</a>
        
      
      <div className='menu text-light'>
      <a className="navbar-brand text-light" href="/">Home</a>
      <a className="navbar-brand text-light" href="/">Pages</a>
      <a className="navbar-brand text-light" href="/">Our Services</a>
      <a className="navbar-brand text-light" href="/">Our Cases</a>
      <a className="navbar-brand text-light" href="/">Features</a>
      <a className="navbar-brand text-light" href="/">Blog</a>
      <a className="navbar-brand text-light" href="/">Shop</a>
      </div>

      <div>
      <a className="navbar-brand text-light" href="/">S</a>
      <a className="navbar-brand text-light" href="/">C</a>
      <a className="navbar-brand text-light" href="/">|</a>
      <a className="navbar-brand text-light" href="/">Join now</a>
      </div>
    </nav>
      ;
  }
}

export default Navbar;