import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Copyright extends Component {
    state = {  } 
    render() { 
        return <footer className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>&copy; 2023 Meine Firma. Alle Rechte vorbehalten.</p>
            </div>
            <div className="col-6 ">
             icons
            </div>
          </div>
        </div>
      </footer>;
    }
}
 
export default Copyright;