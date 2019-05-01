import React, { Component } from "react";
import {Modal, Form, Button, Alert} from 'react-bootstrap';
import {LoginRepo} from "../../api/loginRepo";
import {Redirect} from 'react-router-dom';

export class Login extends Component{
     loginRepo = new LoginRepo();

    state = {
        email: '',
        password: '',
        showError: false,
        showModal: true,
        redirect: ''
    }

    onSubmit(){
        var user = {
            email: this.state.email,
            password: this.state.password
        }

        // verifyUser = async func (e) => e.preventDefault() function and put all the shit below in it

        this.loginRepo.loginUser(user)
        .then(() => {
            if(localStorage.getItem('code') === '200'){
                this.setState({redirect: '/home'})
            }
            else{
                this.setState({showError: true})
            }
        })
        .catch(() => alert('error'));
        this.setState(state => {
            state.email="";
            state.password="";
            return state;
        });
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={{pathname: this.state.redirect}} />
        }
        return (
            <Modal show={this.state.showModal}>
              <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                      Login
                  </Modal.Title>
                  <Button variant="light" onClick={this.props.changeView}>X</Button>
              </Modal.Header>
              <Modal.Body>
              <div className="Login">
                <Form className = "Form">
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Email" value= { this.state.email } onChange={e => this.setState({ email: e.target.value })}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" value= { this.state.password } onChange={e => this.setState({ password: e.target.value })}/>
                </Form.Group>
                
                </Form>
              </div>
              {this.state.showError && <Alert variant="danger">{localStorage.getItem('resp')}</Alert>}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={(e) => this.onSubmit()}>Submit</Button>
              </Modal.Footer>
      </Modal>
        );
    }
}

export default Login;