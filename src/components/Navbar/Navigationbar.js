import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import {FaRegQuestionCircle,FaRegCommentDots,FaRegNewspaper,FaRegStar} from "react-icons/fa"
import {GiCog} from "react-icons/gi"

import './Navbar.css';
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
                                <Nav.Link  className='menu'> Acceuil</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/Partenariat'>
                                <Nav.Link  className='menu' >Partenariat</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Navigation" id="basic-nav-dropdown">
                                <NavDropdown.Item href='/#About' ><FaRegQuestionCircle/> A Propos</NavDropdown.Item>
                                <NavDropdown.Item href="/#Services"><GiCog/> Service</NavDropdown.Item>
                                <NavDropdown.Item href="/#Contact"><FaRegCommentDots/> Contact</NavDropdown.Item>
                                <NavDropdown.Item href="/#Whyjoin"><FaRegStar/> Nos valeurs</NavDropdown.Item>
                                <NavDropdown.Item href="/#News"> <FaRegNewspaper/> Actualités</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar