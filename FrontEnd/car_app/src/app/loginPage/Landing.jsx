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
            <div className="container" style={{position: 'absolute', zIndex: '10'}}>
                <SignUp />
            </div>
        </Row>
            
        );
    }
}

export default Landing;

/*
<Row className="landing">
                <div className="container">
                    <img className="img-fluid" src="icons/landingImg.png" alt="img"></img>
                </div>
                <div className="sign" style={{zIndex: '20'}}>
                    <SignUp />
                </div>
            </Row>
*/