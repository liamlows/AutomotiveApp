import React, { Component } from 'react';
import "./Login.css";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";

export default class Login extends Component {
    // constructor(props) {
    //   super(props);
  
    //   this.state = {
    //     email: "",
    //     password: ""
    //   };
    // }
  
    // validateForm() {
    //   return this.state.email.length > 0 && this.state.password.length > 0;
    // }
  
    // handleChange = event => {
    //   this.setState({
    //     [event.target.id]: event.target.value
    //   });
    // }
  
    // handleSubmit = event => {
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <div className="Login">
        <p>TEST TEST TEST</p>
          {/* <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <Form.Label>Email</Form.Label>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form> */}
        </div>
      );
    }
  }