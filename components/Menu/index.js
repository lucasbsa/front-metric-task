
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Menu() {

  return (
      <Navbar bg="dark" variant="dark" style={{ marginLeft:'0%'}}>
        <Navbar.Brand href="/home" style={{ fontSize: '1.5rem' }}>{'Metric&Task'}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Home/home" style={{ fontSize: '1rem' }}>Home</Nav.Link>
          <Nav.Link href="/Board/board" style={{ fontSize: '1rem' }}>Board</Nav.Link>
          <Nav.Link href="/User/list" style={{ fontSize: '1rem' }}>User</Nav.Link>
          <Nav.Link href="/Metrics/dashboard" style={{ fontSize: '1rem' }}>Metric</Nav.Link>

        </Nav>
      </Navbar>
  );
};


