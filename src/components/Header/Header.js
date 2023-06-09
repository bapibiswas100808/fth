import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <section>
      <div className="header-area border-bottom border-black">
        <Navbar bg="success" expand="lg">
          <Container className="py-2">
            <Navbar.Brand className="text-white fs-4" href="#home">
              ফতেপুর সাংস্কৃতিক পরিষদ
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="fs-5 pe-4 text-white" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="fs-5 pe-4 text-white" href="#link">
                  Gallery
                </Nav.Link>
                <Nav.Link className="fs-5 text-white" href="#link">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </section>
  );
};

export default Header;
