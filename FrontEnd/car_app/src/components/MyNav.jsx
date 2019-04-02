import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from "react-router-dom";

export default () => (
    <Navbar bg="primary" expand="lg" variant="dark" >
    <Navbar.Brand className="text-white" style={{text:"10em"}}>
        <FontAwesomeIcon icon="car" />
        Automotive
    </Navbar.Brand>
    <Nav className="flex-row ml-md-auto d-none d-md-flex">
        <Nav.Link href="#garage" className="text-white">My Garage</Nav.Link>

        <Nav.Link href="#shop" className="text-white">My Shops</Nav.Link>
        <Nav.Link href="#Icon" className="text-white">Icons</Nav.Link>
        <Nav.Link href="#account" className="text-white">Account Information</Nav.Link>
        {/* <Link to="/account_info">Account Information</Link> */}
        <Nav.Link href="#logout" className="text-white">Logout</Nav.Link>
    </Nav>
    </Navbar>
)