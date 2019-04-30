import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap"; 
import { LinkContainer} from "react-router-bootstrap";
import { NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';


class LandingNav extends Component {

    state= {
        viewLogin: false
    }

    onClose() {
        this.setState({
            viewLogin: false
        })
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
                    <NavItem> <Nav.Link onClick={e => this.setState({viewLogin: true})}>Login</Nav.Link></NavItem>
                </Nav>
            </Navbar>
            {this.state.viewLogin && <Login changeView={() => this.onClose()}/>}
          </div>
        );
    }
}

export default LandingNav;
