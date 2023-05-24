import React, { Component } from 'react';
import "./keyFeatures.css"

class KeyFeatures extends Component {
    state = {}
    render() {
        return <div className='key-features-container'>

            <div className='title text-light p-5'><h1>Key Features</h1></div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-1.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">HIGH SPEED AND LOW COSTS</h5>
                                    <p className="card-text custom-text-light">Immediate funding without third-parties. Smart contracts autonomously perform funding – collect and release payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-2.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">FAIR DEALS ONLY</h5>
                                    <p className="card-text custom-text-light">Open-source smart contract ensures fair and transparent deals between merchants and affiliates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-3.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">PROTECTION FROM HACKING</h5>
                                    <p className="card-text custom-text-light">On a decentralized platform, all user accounts are independent; if one account is hacked, this won’t breach the security of.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-4.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">COST EFFECTIVE</h5>
                                    <p className="card-text custom-text-light">Scale economy through decentralization leading to significant decrease in transaction fees</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-5.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">NO MORE MIDDLE MEN</h5>
                                    <p className="card-text custom-text-light">Immediate funding without third-parties. Smart contracts autonomously perform funding – collect and release payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-6.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">EASY ENTRY AND FAIR COMPETITION</h5>
                                    <p className="card-text custom-text-light">Open-source smart contract ensures fair and transparent deals between merchants and affiliates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-7.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">GLOBAL P2P TRADE FINANCING</h5>
                                    <p className="card-text custom-text-light">On a decentralized platform, all user accounts are independent; if one account is hacked, this won’t breach the security of.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card pt-3 mb-3 border-0" style={{ maxWidth: '540px', backgroundColor: 'transparent' }}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="/assets/img/features-8.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body pt-0">
                                    <h5 className="card-title text-light">REAL-TIME DATABASE</h5>
                                    <p className="card-text custom-text-light">Scale economy through decentralization leading to significant decrease in transaction fees</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>;
    }
}

export default KeyFeatures;