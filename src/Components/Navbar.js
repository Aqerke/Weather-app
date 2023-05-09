import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Navbar.css";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" variant="white">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png"
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              AccuWeather
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About </Nav.Link>
                <Nav.Link href="/contacts"> Contact </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </Router>
      </>
    );
  }
}
