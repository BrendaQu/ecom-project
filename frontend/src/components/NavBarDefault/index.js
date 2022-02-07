import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
const NavBarDefault = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Makeup Inc.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-center ms-auto">
                        <Nav.Link href="#home">Login</Nav.Link>
                        <NavDropdown title="Name" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="#"> <FontAwesomeIcon icon={faShoppingBag}/> </Nav.Link>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavBarDefault;