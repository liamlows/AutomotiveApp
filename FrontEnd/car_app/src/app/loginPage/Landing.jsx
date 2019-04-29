import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from "./SignUp";
import './Landing.css'
import {Row} from 'react-bootstrap';


class Landing extends Component {
    render() {
        return (
            <Row className="landing">
                <div className="container-fluid">
                    <img className="img-fluid" src="icons/landingImg.png" alt="img"></img>
                </div>
                <div className="container">
                    <SignUp />
                </div>
            </Row>
        );
    }
}

export default Landing;