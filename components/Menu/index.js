
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Menu() {

  // const {
  //   showModalSelectUser,
  // } = useContextSprint();
  return (
    <>
      {/* {
        showModalSelectUser &&
        <ModalSelect
          show={showModalSelectUser}

        >
        </ModalSelect>
        

      } */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home" style={{ fontSize: '1.5rem' }}>{'Metric&Task'}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{ fontSize: '1rem' }}>Home</Nav.Link>
          <Nav.Link href="/Board/board" style={{ fontSize: '1rem' }}>Board</Nav.Link>
          <Nav.Link href="/User/list" style={{ fontSize: '1rem' }}>User</Nav.Link>
          <Nav.Link href="/metric" style={{ fontSize: '1rem' }}>Metric</Nav.Link>

        </Nav>
        {/* <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{fontSize:'1.5rem'}} /> */}
        {/* </Form>  */}
      </Navbar>
    </>
  );
};

