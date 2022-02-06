import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { menus } from "../../enum/NavBarMenu";
import "./NavBar.css";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        background: "#234ea2",
        fontSize: "1.2em",
        width: "100%",
        marginTop: "45px",
      }}
    >
      <Container className="navContainer">
        <Navbar.Brand href="/home" style={{ float: "left" }}>
          <Image
            src={public_img_path + "logo_blue_cropped.png"}
            className="d-inline-block align-top mmtLogo"
            alt="MMT Trading"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-end"
            style={{ width: "100%", textAlign: "right" }}
          >
            {menus.map((menu, index) => {
              return menu.dropDown ? (
                <NavDropdown
                  key={index}
                  className="navDropDown"
                  title={menu.name.toUpperCase()}
                >
                  {menu.dropDownItems.map((item, j) => {
                    return item.dropDown ? (
                      <NavDropdown
                        className="navDropDown"
                        title={item.name.toUpperCase()}
                        key={j}
                      >
                        {item.dropDropItems.map((moreItem, k) => {
                          return (
                            <NavDropdown.Item
                              className="navDropDownItem"
                              key={k}
                              eventKey={k}
                            >
                              {moreItem.name.toUpperCase()}
                            </NavDropdown.Item>
                          );
                        })}
                      </NavDropdown>
                    ) : (
                      <div key={j}>
                        <NavDropdown.Item
                          className="navDropDownItem bold"
                          eventKey={j}
                          onClick={() => {
                            window.location = menu.url + item.url;
                          }}
                        >
                          {item.name.toUpperCase()}
                        </NavDropdown.Item>
                        {j !== menu.dropDownItems.length - 1 && (
                          <NavDropdown.Divider />
                        )}
                      </div>
                    );
                  })}
                </NavDropdown>
              ) : (
                <Nav.Link href={menu.url} key={index}>
                  {menu.name.toUpperCase()}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
