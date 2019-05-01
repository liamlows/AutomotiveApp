import React, { Component } from "react";
import MyNav from "../home/MyNav";
import { Link } from 'react-router-dom';

export class ReturnLogin extends Component {

  state = {
    
  }

  render() {
    return (
      <div className="">
        <MyNav />
        <div class="alert alert-info" role="alert">
            You have changed your password successfully! <Link to="/"><u>Click here</u> to login with new password</Link>
        </div>
      </div>
    );
  }
}

export default ReturnLogin;