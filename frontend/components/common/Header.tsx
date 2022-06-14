import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { logoutAction } from "../../store/users/actions";
import { RootAppStateProps } from "../../utils/types/reduxTypes";



const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );

  const logoutHandler =()=>{ 
    dispatch(logoutAction(false));

    toast(`Logout successful!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Product Storage</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {userInfo && userInfo["isAdmin"] && (<Nav.Link href="add-product">Add Product</Nav.Link>)}

          {!userInfo && (
          <Nav.Link href="/signup">Signup</Nav.Link>
          )}
          {!userInfo && (
          <Nav.Link href="/login">Login</Nav.Link>)}
          {userInfo && (
            <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
    <ToastContainer containerId="an id" draggable={false} />
  </Navbar>
  );
};

export default Header;