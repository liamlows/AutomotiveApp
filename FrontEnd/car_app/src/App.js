import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
    render() {
        return (
          <div className="App container">
            <Navbar bg="light" expand="lg" ht className = "justify-content-between">
            <Navbar.Brand className = "navbar-brand" href="#home">
                <Link to="/">Car App</Link>
            </Navbar.Brand>
            <Nav pullRight className=" mr-sm-2">
                <LinkContainer id = "item" to="/signup">
                    <NavItem>Sign Up</NavItem>
                </LinkContainer>
                <LinkContainer id = "item" to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
            </Navbar>
            <Routes />
          </div>
        );
      }
}

export default App;
