import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from "./SignUp";
import './Landing.css'


class Landing extends Component {
    render() {
        return (
            <div className="flex-row">
            <img className="img-fluid" src="icons/landingImg.png" alt="img"></img>
            <SignUp />
            </div>
        );
    }
}

export default Landing;
/*
<>
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
</>
*/