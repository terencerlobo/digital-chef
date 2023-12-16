import React from 'react';
import logo from './Logo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {
    return (
        <div>
            <Navbar bg="white" collapseOnSelect expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#home"><Image
                                alt=""
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                />{' '}
                                Digital Chef
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#Menu1">Menu1</Nav.Link>
                                <Nav.Link href="#Menu2">Menu2</Nav.Link>
                                <Nav.Link href="#Menu3">Menu3</Nav.Link>
                                </Nav>
                         <Nav>
                            <Nav.Link href="#home">{props.text}</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;