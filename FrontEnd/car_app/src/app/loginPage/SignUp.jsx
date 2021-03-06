import React, { Component } from 'react';
import { Button, Form, Card, Alert } from "react-bootstrap";
import "./SignUp.css";
import LoginRepo from '../../api/loginRepo';


class SignUp extends Component {
  loginRepo = new LoginRepo();
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    isRegistered: false
  }

    async onSubmit() {
        var user = {
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name
        }
        await this.loginRepo.registerUser(user);
        this.setState(state => {
            state.email="";
            state.password="";
            state.first_name = "";
            state.last_name="";
            state.isRegistered=true;
            return state;
        });
    }
  
    render() {
        return (
            <Card className="signup" style={{backgroundColor: 'transparent', border: 'none', marginRight:'3em',marginTop:'3em'}}>
                <Card.Header style={{border: 'none'}}>
                    <h5>Sign Up</h5>
                </Card.Header>
                <Card.Body style={{padding:'0em'}}>
                    <Form className="Form"  id = "su_form">
                        <Form.Control className="field" placeholder="First name" value= { this.state.first_name } onChange={e => this.setState({ first_name: e.target.value })}/>
                        <Form.Control className="field" placeholder="Last name" value= { this.state.last_name } onChange={e => this.setState({ last_name: e.target.value })}/>
                        <Form.Control className="field" placeholder="Email" value= { this.state.email } onChange={e => this.setState({ email: e.target.value })}/>
                        <Form.Control className="field" placeholder="Password" type="password" value= { this.state.password } onChange={e => this.setState({ password: e.target.value })}/>
                        {this.state.isRegistered && <Alert variant="info">Account successfully created! Please login with your new credentials!</Alert>}
                        
                    </Form>
                    <Button variant="primary" type="submit" onClick={e => this.onSubmit()}>
                        Submit
                    </Button>
                </Card.Body>
            </Card>
        );
    }

}

export default SignUp;