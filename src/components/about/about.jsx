import React, { Component } from 'react';
import "./about.css"


class About extends Component {
    state = {}
    render() {
        return <div className='about-container'>
            <div className='about-left'>
                <div className='text-light'> <h1 className='display-1'> Bilcoin</h1> </div>
                <div className='text-light'>Cryptro is a decentralised public blockchain and cryptocurrency
                    project and is fully open source. Cryptro is developing
                    a smart contract platform</div>
                <div className='text-light'>Learn more - white paper</div>
            </div>
            <div className='about-right'>

                <div className="card text-center mb-3" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default About;