import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from "./SignUp";
import './Landing.css'
import {Row} from 'react-bootstrap';


class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <img className="img-fluid" src="icons/landingImg.png" alt="img"></img>
                <div className="sign">
                    <SignUp />
                </div>
            </div>
        );
    }
}

export default Landing;