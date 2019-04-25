import React, { Component } from 'react';
import { Button, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";


class SignUp extends Component {
    render() {
      return (
        <Card className="float-right" style={{width: '36%', marginTop: '9em'}}>
            <Card.Header>
                <h5>Sign Up</h5>
            </Card.Header>
            <Card.Body style={{backgroundColor: '#B3CDE0'}}>
                <Form className="Form"  id = "su_form">
                    <Form.Control placeholder="First name"/>
                    <Form.Control placeholder="Last name" />
                    <Form.Control placeholder="Email" />
                    <Form.Control placeholder="Password" />
                    
                </Form>
                <Link to="/main">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Link>
            </Card.Body>
        </Card>
      );
    }
  }

export default SignUp;