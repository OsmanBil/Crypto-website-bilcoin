import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const isHomePage = pathname === '/';

  useEffect(() => {
  }, [pathname]);

  const handleNavClick = (event) => {
    event.preventDefault();
    const newHash = event.target.getAttribute('href').substring(1);
    scrollToSection(newHash);
  };

  const scrollToSection = (hash) => {
    const section = document.getElementById(hash);
    if (section) {
      const navbarHeight = document.querySelector('.navbar-content').offsetHeight;
      const sectionTop = section.offsetTop;
      const offsetTop = sectionTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      window.history.pushState(null, null, `#${hash}`);
    }
  };

  return (
    <nav className="navbar-content">
      <Link className="navbar-logo text-light" to="/">Bilcoin</Link>
      <div className='menu text-light'>
        {isHomePage && <a className="navbar-brand text-light" href="#about" onClick={handleNavClick}>About</a>}
        {isHomePage && <a className="navbar-brand text-light" href="#systems" onClick={handleNavClick}>Systems</a>}
        {isHomePage && <a className="navbar-brand text-light" href="#keyFeatures" onClick={handleNavClick}>Key Features</a>}
        {isHomePage && <a className="navbar-brand text-light" href="#whyUs" onClick={handleNavClick}>Why Us</a>}
      </div>
      <div>
        <Link className="navbar-brand text-light" to="/shop">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
