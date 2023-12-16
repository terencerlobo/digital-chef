import React from 'react';
import { Image, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import MenuItem from './Menu.jpg'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Menu = (props) => {
    return (
        <div>
            <Modal {...props} size="xs" >
        <Modal.Header closeButton>
          <Modal.Title>Today's Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <center><Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Fishghetti</Card.Title>
        <Card.Text><Image   alt=""
                                src={MenuItem}
                                width="75"
                                height="75"
                                className="d-inline-block align-top"/><br></br>
        Speedy, simple and packed with flavour, 
        chef Ben Tish's Sicilian recipe for spaghetti dressed with lemon, butter, 
        anchovies and Parmesan is livened up with woody sage and crunchy pangrattato (breadcrumbs).
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Creamy Mushroom Soup</ListGroup.Item>
        <ListGroup.Item>Vanilla Strawberry Cake</ListGroup.Item>
        <ListGroup.Item>Our Signature Dish</ListGroup.Item>
      </ListGroup>
      </Card></center> 
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        
    );
}

export default Menu;