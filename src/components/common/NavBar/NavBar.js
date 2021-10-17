import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { menus } from '../../enum/NavBarMenu'
import './NavBar.css'

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="md" style={{backgroundColor: "grey", fontSize: "1.2em"}}>
                <Container className="container">
                    <Navbar.Brand href="/home" style={{float: "left"}}>MMT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{width: "100%", textAlign: "right"}}>
                            {menus.map((menu, index) => {
                                return menu.dropDown ?
                                <NavDropdown className="navDropDown" title={menu.name}>
                                    {menu.dropDownItems.map((item, j) => {
                                        return item.dropDown ?
                                                <NavDropdown className="navDropDown" title={item.name}>
                                                    {item.dropDropItems.map((moreItem, k) => {
                                                        return <NavDropdown.Item className="navDropDownItem" eventKey={k}>{moreItem.name}</NavDropdown.Item>
                                                    })}
                                                </NavDropdown>
                                                :
                                                <NavDropdown.Item className="navDropDownItem" eventKey={j}>{item.name}</NavDropdown.Item>
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
        </React.Fragment>
    )
}

export default NavBar