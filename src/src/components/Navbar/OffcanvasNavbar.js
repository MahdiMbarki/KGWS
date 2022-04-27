import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Offcanvas } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';
const OffcanvasNavbar = () => {
    return (
        <div className='P-navbar'>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <LinkContainer to='/'>
                        <img
                            alt=""
                            src={require("../../images/Logo.png")}
                            width="45"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <LinkContainer to='/'>
                                    <Nav.Link  > Acceuil</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/Partenariat'>
                                    <Nav.Link  >Partenariat</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title="Navigation" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">A Propos</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">Service</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default OffcanvasNavbar;