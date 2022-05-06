import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


import './Navbar.css';
const Navigationbar = (props) => {

    return (

        <div className='D-navbar'>


            <Navbar className='fixed-top' bg="light" expand="sm" >
                <Container>
                    <LinkContainer to='/'>

                        <img
                            alt=""
                            src={props.data ? props.data.logo : ""}
                            width="80"
                            height="60"
                            className="d-inline-block align-top"
                            id="logonav"
                        />

                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {props.data
                                ? props.data.navs.map((d, i) => (
                                    <Nav.Link className='menu' href={d.href} key={`${d}-${i}`}>{d.pagename}  </Nav.Link>
                                ))
                                : "loading"}
                            <LinkContainer to="/Partenariat">
                                <Nav.Link className='menu'  >Partenariat</Nav.Link>
                            </LinkContainer>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navigationbar