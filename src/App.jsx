import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import About from './components/about/about';
import Systems from './components/systems/systems';
import KeyFeatures from './components/keyFeatures/keyFeatures';


class App extends Component {


    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount++
        } else {
            currentItems.push({
                amount,
                name,
                price
            });
        }



        //mit setState werden daten übergeben und es wird neu gerendert
        this.setState({ items: currentItems });
        console.log(this.state);

    }

    componentDidMount() {
        const parallaxElements = document.querySelectorAll('.parallax-container');
        parallaxElements.forEach((parallaxContainer) => {
            const parallaxDiv = parallaxContainer.querySelector('.parallax');
            const parallaxHeight = parallaxDiv.offsetHeight;
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const parallaxOffset = (scrollTop - parallaxContainer.offsetTop) * 0.4; // Hier können Sie die Geschwindigkeit anpassen
                parallaxDiv.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
            });
        });
    }


    render() {
        return <React.Fragment>
            <div className='navbar-container '>
                <Navbar />
            </div>
            <div className='main-container'>



                <div class="parallax-container">
                    <div class="parallax"></div>
                    <div class="parallax-content">
                        <div className='about'><About /></div>
                    </div>
                </div>



                <div><Systems /></div>
                <div className='key-features'><KeyFeatures /></div>
            </div>
            <div className="footer"><Footer /></div>
        </React.Fragment>
    }
}

export default App;