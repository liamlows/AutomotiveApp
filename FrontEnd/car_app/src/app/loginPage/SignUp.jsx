import React, { Component } from 'react';
import { Button, Form, Card } from "react-bootstrap";
import "./SignUp.css";
import LoginRepo from '../../api/loginRepo';


class SignUp extends Component {
  loginRepo = new LoginRepo();
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  }

    async onSubmit() {
        console.log(this.state);
        await this.loginRepo.registerUser(this.state);
        this.setState(state => {
            state.email="";
            state.password="";
            state.first_name = "";
            state.last_name="";
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
                        <Form.Control className="field" placeholder="First name" onChange={e => this.setState({ first_name: e.target.value })}/>
                        <Form.Control className="field" placeholder="Last name" onChange={e => this.setState({ last_name: e.target.value })}/>
                        <Form.Control className="field" placeholder="Email" onChange={e => this.setState({ email: e.target.value })}/>
                        <Form.Control className="field" placeholder="Password" type="password" onChange={e => this.setState({ password: e.target.value })}/>
                        
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