import React, { Component } from 'react';
import { Button, Col, Form } from "react-bootstrap";
import "./SignUp.css";


class SignUp extends Component {
    render() {
      return (
        <div className = "SignUp">
            <Form className = "Form">
            <Form.Row>
                <Col>
                    <Form.Control placeholder="First name"/>
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Form.Row>
            <Form.Row>
                <Form.Control placeholder="Email" />
            </Form.Row>
            <Form.Row>
                <Form.Control placeholder="Password" />
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
          
      );
    }
  }

export default SignUp;