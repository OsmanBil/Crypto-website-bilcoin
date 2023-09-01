import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Copyright from '../copyright/copyright';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="bg-dark text-light footer-container">
              <Container>
                <Row>
                  <Col md={6}>
                    <h5>Bilcoin</h5>
                    <p>Bilcoin, everyone has a voice and the ability to propose projects directly to the network. Anything you can do.</p>
                  </Col>
                  <Col md={6}>
                    <h5>Contact</h5>
                    <p>Email: admin@bilcon.com</p>
                    <p>Phone: 123-456-7890</p>
                  </Col>
                </Row> <div>
                <Copyright/>
            </div>
              </Container>
            </footer>
          );
    }
}
 
export default Footer;