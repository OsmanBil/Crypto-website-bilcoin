import React, { Component } from 'react';
import "./systems.css"

class Systems extends Component {
    state = {}
    render() {
        return <div>
            <div className='cards-container'>
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">DECENTRALISED SYSTEM</h5>
                                <p className="card-text">A technical failure can paralyze all affiliate networks on a centralized platform, until the cause is detected and rectified the system.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">BANKS PAYMENT SYSTEMS</h5>
                                <p className="card-text">Up to 45% of a merchant’s budget is spent on commissions charged by a ntumber of brokers, including banks, payment systems.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CPA NETWORKS</h5>
                                <p className="card-text">Affiliate networtks have to pay for using existing platforms on a monthly basis or spend money on developing proprietary platforms.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Systems;