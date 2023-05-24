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


    render() {
        return <React.Fragment>
            <div className='navbar-container '>
                <Navbar />
            </div>
            <div className='main-container'>
                <div className='about'><About /></div>
                <div><Systems/></div>
                <div className='key-features'><KeyFeatures/></div>
            </div>
            <div className="footer"><Footer /></div>
        </React.Fragment>
    }
}

export default App;