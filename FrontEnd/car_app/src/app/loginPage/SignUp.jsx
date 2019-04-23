import React, { Component } from 'react';
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";


class SignUp extends Component {
    render() {
      return (
        <div className = "flex-wrap float-right">
            <Form className = "Form" id = "su_form">
            <Form.Row id="no_margin">
                <Col id="no_margin">
                    <Form.Control placeholder="First name"/>
                </Col>
                <Col id="no_margin">
                    <Form.Control placeholder="Last name" />
                </Col>
            </Form.Row>
            <Form.Control placeholder="Email" />
            <Form.Control placeholder="Password" />
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

export default SignUp;