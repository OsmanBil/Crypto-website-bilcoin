import React, { Component } from 'react';
import "./about.css"


class About extends Component {
    state = {}
    render() {
        return <div className='about-container'>

            <div className='about-top-box'>
                <div className='about-left'>
                    <div className='text-light'> <h1 className='display-1'> Bilcoin</h1> </div>
                    <div className='text-light'>Cryptro is a decentralised public blockchain and cryptocurrency
                        project and is fully open source. Cryptro is developing
                        a smart contract platform</div>
                    <div className='text-light mt-3 d-flex'>
                        <div className='padding-right'><a href="#" className="btn btn-primary">Learn more</a></div>
                        <div><a href="#" className="btn btn-primary">White paper</a></div>

                    </div>
                </div>
                <div className='about-right'>
                    <div className="card text-center mb-3" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-dark">Bilcoin is live now</h5>
                            <p className="card-text text-dark">1 st stage ends soon</p>
                            <a href="#" className="btn btn-primary ">Buy Bilcoin now</a>
                            <br />
                            <br />
                            <h5 className='text-dark'>1 ETH = 2000 BilC</h5>
                            <div className='text-dark'>We accept <div>Bitcoin | Ethereum</div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-bottom">
                <div className="about-bottom-left text-light">
                    <p>DECENTRALIZED PLATFORM THAT RUNS SMART CONTRACTS!</p>
                </div>
                <div className="about-bottom-middle text-light">
                    <p style={{ transform: 'rotate(-90deg)' }}>About us -------------</p>
                </div>
                <div className="about-bottom-right text-light">
                    <p>Cryptro is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.</p>
                </div>
            </div>

        </div>;
    }
}

export default About;