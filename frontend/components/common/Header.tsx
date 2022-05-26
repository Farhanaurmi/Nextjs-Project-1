import React from "react";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Nav from "../../node_modules/react-bootstrap/esm/Nav";
import Navbar from "../../node_modules/react-bootstrap/esm/Navbar";
import NavDropdown from "../../node_modules/react-bootstrap/esm/NavDropdown";


const Header = () => {
  return (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Product Storage</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Add Product</Nav.Link>
          <Nav.Link href="#home">Signup</Nav.Link>
          <Nav.Link href="#home">Login</Nav.Link>
          <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;