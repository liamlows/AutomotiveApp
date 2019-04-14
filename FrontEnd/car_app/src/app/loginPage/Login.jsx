import React, { Component } from 'react';
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
      return (
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
        <Link to="/main">
        <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Link>
        </Form>
        </div>
      );
    }
  }

export default Login;