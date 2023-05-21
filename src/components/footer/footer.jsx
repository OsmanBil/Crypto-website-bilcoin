import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Copyright from '../copyright/copyright';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="bg-dark text-light">
              <Container>
                <Row>
                  <Col md={6}>
                    <h5>Informationen</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Col>
                  <Col md={6}>
                    <h5>Kontakt</h5>
                    <p>Email: info@example.com</p>
                    <p>Telefon: 123-456-7890</p>
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