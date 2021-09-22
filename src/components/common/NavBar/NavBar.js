import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar