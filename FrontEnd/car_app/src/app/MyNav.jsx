import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        );
    }
}

export default MyNav;