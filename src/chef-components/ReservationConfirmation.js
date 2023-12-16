import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import logo from './Logo.jpg';


function ReservationConfirmation() {
  const [position, setPosition] = useState('top-start');
  const [show, setShow] = useState(false);
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer position="top-end" className="p-3">
        <Toast {...props} delay={3000}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Reservation Confirmed</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>Your Reservation at Little Italy is confirmed. Enjoy your time there.</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto"><Image
                                alt=""
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                />{' '}</strong>
            <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Thank you for choosing Digital Chef</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default ReservationConfirmation;