import React, { Component } from 'react';
import { Button, Col, Form, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./SignUp.css";
import LoginRepo from '../../api/loginRepo';


class SignUp extends Component {
  loginRepo = new LoginRepo;
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    redirect: ''
  }

  onSubmit() {
    var user = {
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name
    }

    this.loginRepo.registerUser(user)
    .then(() => {
      this.setState({redirect: '/home'});
    });
  }
  
    render() {
      if(this.state.redirect) {
        return <Redirect to={{pathname: this.state.redirect}} />
      }

      return (
        <Card className="signup" style={{backgroundColor: 'transparent', border: 'none'}}>
            <Card.Header style={{border: 'none'}}>
                <h5>Sign Up</h5>
            </Card.Header>
            <Card.Body>
                <Form className="Form"  id = "su_form">
                    <Form.Control placeholder="First name" onChange={(e,newValue) => this.setState({first_name: newValue})}/>
                    <Form.Control placeholder="Last name" onChange={(e,newValue) => this.setState({last_name: newValue})}/>
                    <Form.Control placeholder="Email" onChange={(e,newValue) => this.setState({email: newValue})}/>
                    <Form.Control type="password" placeholder="Password" onChange={(e,newValue) => this.setState({password: newValue})}/>
                    
                </Form>
                      <Button variant="primary" type="submit" onClick={e => this.onSubmit()}>
                          Submit
                      </Button>
            </Card.Body>
        </Card>
      );
    }
  
    /*componentDidMount() {
      this.loginRepo.registerUser(this.state)
      .then(this.successfulRegister());
    }*/

    /*successfulRegister() {
      <Redirect to="/home"/>
    }*/

}

export default SignUp;