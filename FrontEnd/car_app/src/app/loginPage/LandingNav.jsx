import React, { Component } from "react";
import { Navbar, Nav, Modal, Button, Form} from "react-bootstrap"; 
import { LinkContainer} from "react-router-bootstrap";
import {Link} from 'react-router-dom';
import { NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';


class LandingNav extends Component {
    state = {
        showModal: false
    }

    onClose() {
        this.setState(() => {
            return {showModal: false };
        }
        )
    }

    renderLogin() {
        this.setState(
            {
                showModal: true
            }
        )
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
                    <NavItem> <Nav.Link onClick={e => this.renderLogin()}>Login</Nav.Link></NavItem>
                </Nav>
            </Navbar>

            <Modal show={this.state.showModal} onHide={this.onClose}>
              <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                      Login
                  </Modal.Title>
                  <Button variant="light" onClick={e => this.onClose()}>X</Button>
              </Modal.Header>
              <Modal.Body>
              <div className="Login">
                <Form className = "Form">
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                </Form>
              </div>
              </Modal.Body>
              <Modal.Footer>
                <Link to="/main" className="btn btn-submit">Submit</Link>
              </Modal.Footer>
      </Modal>
          </div>
        );
    }

    componentDidMount() {
    }
}

export default LandingNav;

/*
<FontAwesomeIcon icon="window-close" onClick={e => this.onClose()}/>
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
