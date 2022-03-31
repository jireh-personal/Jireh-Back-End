import React, { Component } from 'react';
import { Button, Row, Col, Dropdown, Nav, Navbar,NavDropdown, Container } from 'react-bootstrap';


export default class Navigation extends Component{
  render(){
      return(
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
        <Navbar.Brand href="#" className="text-light">Jireh Practice 1</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Dashboard</Nav.Link>
            <NavDropdown title="Items" id="basic-nav-dropdown">
              <NavDropdown.Item href="items">Item1</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
