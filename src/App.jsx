import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import About from './components/about/about';
import Systems from './components/systems/systems';
import KeyFeatures from './components/keyFeatures/keyFeatures';
import WhyUs from './components/whyUs/whyUs';

import Shop from './components/shop/shop';

class App extends Component {
    state = {
       
    }

   

    componentDidMount() {

    
        // Funktion zum Anpassen der Scrollposition unter Berücksichtigung der Navbar-Höhe
        const adjustScrollForNavbar = (hash) => {
            const section = document.getElementById(hash);
            if (section) {
                const navbarHeight = document.querySelector('.navbar-container').offsetHeight;
                const sectionTop = section.offsetTop;
                const offsetTop = sectionTop - navbarHeight;
        
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        };
        // Fügt einen Event-Listener für das 'hashchange'-Ereignis hinzu
        window.addEventListener('hashchange', adjustScrollForNavbar);
    
        const navLinks = document.querySelectorAll('.navbar-link'); // Ändere den Selector entsprechend deinen tatsächlichen Klassen
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const newHash = link.getAttribute('href').substring(1); // entferne das "#"
        
                // Setze den Hash, aber verhindere das Standard-Scroll-Verhalten
                window.history.pushState(null, null, `#${newHash}`);

        
                // Manuelle Anpassung der Scroll-Position
                adjustScrollForNavbar(newHash);
            });
        });

        
        // Code für Parallax-Scrolling-Effekte
        const parallaxElements = document.querySelectorAll('.parallax-container');
        parallaxElements.forEach((parallaxContainer) => {
            const parallaxDiv = parallaxContainer.querySelector('.parallax');
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const parallaxOffset = (scrollTop - parallaxContainer.offsetTop) * 0.4;
                parallaxDiv.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
            });
        });
    }
    
    

    render() {
        return (
            <Router>
                <div className='navbar-container'>
                <Navbar isHomePage={window.location.pathname === '/'} />
                </div>
                <div className='main-container'>
                    <Routes>
                        <Route path="/shop" element={<Shop items={this.state.items} />} />
                        <Route path="/" element={
                            <>
                                <div className="parallax-container">
                                    <div className="parallax"></div>
                                    <div className="parallax-content">
                                       
                                        <div id='about' className='about'><About /></div>
                                    </div>
                                </div>
                                <div id='systems' className='systems'><Systems /></div>
                                <div id='keyFeatures' className='key-features'><KeyFeatures /></div>
                                <div id='whyUs' className='why-us'><WhyUs /></div>
                            </>
                        } />
                    </Routes>
                </div>
                <div className="footer"><Footer /></div>
            </Router>
        );
    }
}

export default App;
