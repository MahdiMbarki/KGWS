import React from 'react'
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { HashLink } from 'react-router-hash-link';

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
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            {props.data ? props.data.pages.map((d, i) => (
                                <LinkContainer key={`${d}-${i}`} to={d.to}>
                                    <Nav.Link className='menu'  >{d.pagename}</Nav.Link>
                                </LinkContainer>

                            )) : "loading..."}
                            {props.data
                                ? props.data.navs.map((d, i) => (
                                    <NavLink key={`${d}-${i}`} className='menu'>
                                        <HashLink to={d.href}>

                                            {d.pagename}

                                        </HashLink>
                                    </NavLink>

                                ))
                                : "loading"}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    )
}

export default Navigationbar