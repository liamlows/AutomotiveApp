import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class MyShop extends React.Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Insurance'/>
        }
    }
    render(){
        return (
            <>
                <Navbar bg="primary" expand="lg" variant="dark" >
                    <Navbar.Brand className="text-white" style={{text:"10em"}}><FontAwesomeIcon icon="car" />Automotive</Navbar.Brand>
                    <Nav className="flex-row ml-md-auto d-none d-md-flex">
                        <Nav.Link href="#garage" className="text-white">My Garage</Nav.Link>
                        <Nav.Link href="#shop" className="text-white" onClick={this.setRedirect}>My Shops</Nav.Link>
                        <Nav.Link href="#Icon" className="text-white">Icons</Nav.Link>
                        <Nav.Link href="#account" className="text-white">Account Information</Nav.Link>
                        <Nav.Link href="#logout" className="text-white">Logout</Nav.Link>
                    </Nav>
                </Navbar>

                <h1 style={{margin:".5em"}}>My Shop</h1>

            </>
        )
    }
}
export default MyShop;
