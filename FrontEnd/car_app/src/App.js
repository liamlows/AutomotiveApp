import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
    render() {
        return (
          <div className="App container">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Link to="/">Car App</Link>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav pullRight>
                <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
            {/* </Navbar.Collapse> */}
            </Navbar>
            <Routes />
          </div>
        );
      }
}

export default App;
