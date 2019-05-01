import React, { Component } from "react";
import InsurancePage from './InsurancePage'
import MyNav from "../home/MyNav";

class AccountInfo extends Component {

  state = {
    
  }

  render() {
    return (
      <div className="">
        <MyNav />
        <InsurancePage />
      </div>
    );
  }
}

export default AccountInfo;