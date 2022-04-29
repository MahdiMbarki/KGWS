import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Offcanvas} from 'react-bootstrap'


const OffcanvasNavbar = () => {
    return (
        <div className='P-navbar'>
        <Navbar bg="light" expand={false}>
  <Container fluid>
  <img
          alt=""
          src="./images/Logo.png"
          width="45"
          height="40"
          className="d-inline-block align-top"
        />
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
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</div>
    )
}

export default OffcanvasNavbar