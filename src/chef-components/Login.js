import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate  } from 'react-router-dom';
import logo from './Logo.jpg';
import { Image } from 'react-bootstrap';
import React, { useState } from 'react';



const Login = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
   
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
    navigate("/home")
  };
  return (
    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',}}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Image
                                alt=""
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                />{' '}
                                Digital Chef
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="User Name"  required />
        <Form.Control.Feedback type="invalid">
            Please provide a user name.
          </Form.Control.Feedback>
        <Form.Text className="text-muted">
          This can also be your email address.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Login;