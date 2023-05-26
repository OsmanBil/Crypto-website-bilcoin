import React, { Component } from 'react';
import "./whyUs.css"

class WhyUs extends Component {
    state = {}
    render() {
        return <div className='why-us-container text-light'>
            <div className='why-us-left'>
                <div className="card border-0" style={{ width: '18rem', backgroundColor: 'transparent' }}>
                    <div className="card-body w-50-p">
                        <h5 className="card-title ">CRYPTRO’S TECHNOLOGY DRIVES NEW WORLD</h5>
                        <p className="card-text custom-text-light">Create a tradeable digital token that can be used as a currency, a representation of an asset, a virtual share, a proof of membership or anything at all. These tokens use a standard coin API so your contract will be automatically compatible with any wallet, other contract or exchange also using this standard. The total amount of tokens in circulation can be set to a simple fixed amount or fluctuate based on any programmed ruleset.
                            <br></br>
                            <br></br>
                            By combining our proprietary smart contracts with blockchain technology and providing these tools to everyone.</p>
                        <ul>
                            <li>Smart contracts that work such as Lightning Network</li>
                            <li>Proof-of-stake (PoS) consensus Cross-chain atomic swaps</li>
                            <li>Connectivity across payments networks</li>
                        </ul>


                        <a href="#" className="btn btn-primary">Learn more</a>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='why-us-right'>
                <div className="card border-0" style={{ width: '18rem', backgroundColor: 'transparent' }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">White paper</a>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>


            </div>


        </div>;
    }
}

export default WhyUs;