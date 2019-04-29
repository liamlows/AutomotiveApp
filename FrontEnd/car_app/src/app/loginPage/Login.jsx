import React, { Component } from 'react';
import "./Login.css";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    showModal: true
  }

  onClose() {
    this.setState(
        {
            showModal: false
        }
    )
  }

  onLogin() {

  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.onClose}>
              <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                      Login
                  </Modal.Title>
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
                <Link to="/main" className="btn btn-submit">Submit</Link>
                </Form>
              </div>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={e => this.onClose()}>Close</Button>
              </Modal.Footer>
      </Modal>
    );
  }
}

export default Login;