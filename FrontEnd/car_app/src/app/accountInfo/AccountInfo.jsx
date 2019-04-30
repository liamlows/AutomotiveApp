import React, { Component } from "react";
import { User } from './../../models/user'
import InsurancePage from './InsurancePage'

class AccountInfo extends Component {

  state = {
    account: [
      new User("ruichenn@smu.edu", "1234", "Ruichen", "Ni", "6822560816", 1234, "Pocket Garage", 2, "Shops!")
    ]
  }

  render() {
    return (
      <div className="">
        <InsurancePage user={this.state.account}/>
      </div>
    );
  }
}

export default AccountInfo;