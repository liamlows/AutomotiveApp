import React, { Component } from "react";
import { Navbar } from "react-bootstrap"; 
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


class LandingNav extends Component {
    render() {
        return (
          <>
            <Navbar bg="light" expand="lg" ht className = "justify-content-between">
            <LinkContainer to="/">
            <Navbar.Brand className = "navbar-brand" href="#home">
                Pocket Garage
            </Navbar.Brand>
            </LinkContainer>
            <Nav pullRight className=" mr-sm-2">
                <LinkContainer id = "item" to="/signup">
                    <NavItem>Sign Up</NavItem>
                </LinkContainer>
                <LinkContainer id = "item" to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
            </Navbar>
          </>
        );
    }
}

export default LandingNav;
