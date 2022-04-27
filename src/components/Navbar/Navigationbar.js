import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
//import './Navbar.css';

const Navigationbar = () => {


    return (

        <div className='D-navbar'>

            <Navbar className='fixed-top' bg="light" expand="sm" >
                <Container>
                    <LinkContainer to='/'>
                        <img
                            alt=""
                            src={require("../../images/kompar.jpg")}
                            width="80"
                            height="60"
                            className="d-inline-block align-top"
                        />

                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link > Acceuil</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/Partenariat'>
                                <Nav.Link  >Partenariat</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/#About">About</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/#Services">Services</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/#Contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar