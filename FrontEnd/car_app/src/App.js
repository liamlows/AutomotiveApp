import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class App extends Component {
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {
        return (
          <div className="App container">
            {/* <Navbar bg="light" expand="lg" ht className = "justify-content-between">
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
            </Navbar> */}
            <Navbar bg="primary" expand="lg" variant="dark" >
                <FontAwesomeIcon icon="car" />
                <LinkContainer to="/">
                <Navbar.Brand className = "navbar-brand" href="#home">
                    Car App
                </Navbar.Brand>
                </LinkContainer>
                <Nav className="flex-row ml-md-auto d-none d-md-flex">
                    <LinkContainer to="/garage">
                        <Nav.Link href="#garage" className="text-white">My Garage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/shops">
                        <Nav.Link href="#shop" className="text-white">My Shops</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/icons">
                        <Nav.Link href="#Icon" className="text-white">Icons</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/acc_info">
                        <Nav.Link href="#account" className="text-white">Account Information</Nav.Link>
                    </LinkContainer>
                    <Nav.Link href="#" className="text-white" onClick={() => { this.logout() }}>Logout</Nav.Link>
                </Nav>
            </Navbar>
            <Routes />
          </div>
        );
      }
}

export default App;
