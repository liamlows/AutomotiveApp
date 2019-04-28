import React, { Component } from "react";
import { Navbar, Nav, Modal, Button } from "react-bootstrap"; 
import { LinkContainer } from "react-router-bootstrap";
import { NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login'


class LandingNav extends Component {
    state = {
        showModal: false
    }

    onNavClick() {
        return <Login />
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
                <Nav className="ml-md-auto d-md-flex flex-wrap">
                    <NavItem onClick={e => this.onNavClick()}>Login</NavItem>
                </Nav>
            </Navbar>
          </div>
        );
    }
}

export default LandingNav;

/*
<LinkContainer id="item" to="/login" style={{fontSize: '1.25em'}}>
<Nav pullRight className=" mr-sm-2">
                <LinkContainer id = "item" to="/signup">
                    <NavItem>Sign Up</NavItem>
                </LinkContainer>
                <LinkContainer id = "item" to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
*/
