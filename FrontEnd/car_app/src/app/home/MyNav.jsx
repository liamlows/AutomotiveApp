import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import image from './../media/carsunset.jpeg'; 
import './MyNav.css'
import { faEnvelope, faCar, faKey, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faEnvelope, faCar, faKey, faBuilding);

class MyNav extends Component {
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {
        return (
        <div className="container-fullwidth">
        <Navbar sticky="top" className="nav" bg="light" variant="light" >
            <FontAwesomeIcon icon="car" style={{color: 'black', fontSize:'2.5em'}}/>
            <LinkContainer to="/" style={{marginLeft:'.5em'}}>
            <Navbar.Brand className = "navbar-brand" id="navbar-brand" href="#home" style={{margin:'0em'}}>
                Pocket Garage
            </Navbar.Brand>
            </LinkContainer>
            <Nav className="flex-row ml-md-auto d-none d-md-flex">
                <NavDropdown
                    title="Account"
                    id="dropdown-menu-align-right">
                    <LinkContainer to="/account_info">
                        <NavDropdown.Item href="#">Account Information</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={() => { this.logout() }}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        </div>
        );
    }
}

export default MyNav;