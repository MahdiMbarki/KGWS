import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'


const Navigationbar = () => {
    return (
        <div className='D-navbar'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <img
                        alt=""
                        src="./images/Logo.png"
                        width="42"
                        height="37"
                        className="d-inline-block align-top"
                    />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" > Acceuil</Nav.Link>
                            <Nav.Link href="#link" >Partenariat</Nav.Link>
                            <NavDropdown title="Navigation" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">A Propos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Service</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar