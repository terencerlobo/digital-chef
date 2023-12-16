import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './components.css';

import Table from 'react-bootstrap/Table';
import NavBar from './NavBar'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scheduler from './Scheduler';
import Menu from './Menu';
import './components.css'
import addToCart from './addtocart.png'
import MenuIcon from './MenuIcon.jpg'
import { Image } from 'react-bootstrap';

const TableReservation = () => {
    
    const [modalShow, setModalShow] = React.useState(false);
        return (
            <div>
            <NavBar text = "Welcome, User">
                </NavBar>
                    <div>
                        <Container>
                        <Table striped hover responsive="xs">
      <thead>
        <tr>
          <th>Restaurants Name</th>
          <th>Cuisine</th>
          <th>Menu</th>
          <th>Date</th>
          <th>Add to Cart</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Little Italy</td>
          <td>Italian</td>
          <td><Button variant="outline-secondary" onClick={() => setModalShow(true)}>
          <Image
                                alt=""
                                src={MenuIcon}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                />
      </Button><Menu show={modalShow}
        onHide={() => setModalShow(false)} /></td>
          <td><Scheduler/></td>
          <td><Button variant="outline-secondary"><Image
                                alt=""
                                src={addToCart}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                /></Button></td>
        </tr>
      </tbody>
      </Table>
                        </Container>
                    </div>
                </div>
        );

}

export default TableReservation;