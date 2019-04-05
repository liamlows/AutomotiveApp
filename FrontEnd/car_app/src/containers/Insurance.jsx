import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Insurance extends Component {
    render() {
        return (
            <div>
                <h1 style={{margin:"0.5em"}}>Insurance Policy Form</h1>

                <Form style={{margin:"1.5em"}}>
                    <Form.Group controlId="insurance-email" >
                        <Form.Label><FontAwesomeIcon icon="envelope" size="sm"/> Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={{maxWidth:"40%"}}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="insurance-company">
                        <Form.Label><FontAwesomeIcon icon="building" size="sm" /> Insurance Company</Form.Label>
                        <Form.Control type="company" placeholder="Enter Company Name" style={{maxWidth:"40%"}}/>
                    </Form.Group>
                    <Form.Group controlId="insurance-policy">
                        <Form.Label><FontAwesomeIcon icon="key" size="sm" /> Policy Number</Form.Label>
                        <Form.Control type="policy" placeholder="Enter Insurance number" style={{maxWidth:"40%"}}/>    
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Insurance;