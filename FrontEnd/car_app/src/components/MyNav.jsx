import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from "react-router-dom";

class MyNav extends Component {
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {
        return (
        <Navbar bg="primary" expand="lg" variant="dark" >
            <Navbar.Brand className="text-white" style={{text:"10em"}}>
                <FontAwesomeIcon icon="car" />
                Automotive
            </Navbar.Brand>
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