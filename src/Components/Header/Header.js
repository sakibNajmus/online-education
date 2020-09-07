import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Row, Container, Col} from 'react-bootstrap';

const Header = (props) => {
    const cart = props.cart;
    // console.log(cart)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.fee;        
    }

    return (
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                        <Navbar bg="light" expand="lg" className="header">                            
                            <Navbar.Brand className="logo" href="#home">Online Education</Navbar.Brand>
                                <div className="shopping-cart">
                                    <span><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} | ${total.toFixed(2)}</span>
                                </div>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="menu-bar ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        </Col>
                    </Row>
                </Container>
    );
};

export default Header;