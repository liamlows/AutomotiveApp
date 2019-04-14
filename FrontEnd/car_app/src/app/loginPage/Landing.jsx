import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class Landing extends Component {
    render() {
        return (
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
        );
    }
}

export default App;
