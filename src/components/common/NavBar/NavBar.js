import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { titles } from '../../enum/NavBar'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="md" style={{backgroundColor: "transparent"}}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{width: "100%"}}>
                            {titles.map((title, index) => {
                                return <Nav.Link className="navLink" href={title.url} key={index}>{title.name}</Nav.Link>
                            })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar