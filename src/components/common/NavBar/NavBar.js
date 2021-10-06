import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { menus } from '../../enum/NavBarMenu'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" style={{backgroundColor: "transparent"}}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{width: "100%"}}>
                            {menus.map((menu, index) => {
                                return menu.dropDown ?
                                <NavDropdown className="navDropDown" title={menu.name}>
                                    {menu.dropDownItems.map((item, j) => {
                                        return <NavDropdown.Item className="navDropDownItem" eventKey={j}>{item.name}</NavDropdown.Item>
                                    })}
                                </NavDropdown>
                                :
                                <Nav.Link className="navLink" href={menu.url} key={index}>{menu.name}</Nav.Link>
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