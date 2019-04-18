import React, { Component } from 'react';

import './App.css';
import {InsuranceForm} from './InsuranceForm';
import { InsuranceInfo } from './InsuranceInfo';
import { Insurance } from './Insurance.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCar, faKey, faBuilding } from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faCar, faKey, faBuilding);

class App extends Component {

  state = {
    insurances:[
      
    ],
    editMode:false
   
  }
  
 

  onNewInsurance(insurance){
    this.setState(state => {state.insurances.push(insurance); 
      
      return state;
    })}
  

  render() {
    return (
      <>
        {/* <MyShop /> */}
    {!this.state.editMode && this.state.insurances.length == 0 && <InsuranceForm onNewInsurance={a => this.onNewInsurance(a)}/> }
    {!this.state.editMode && this.state.insurances.length != 0 && <InsuranceInfo insurances={this.state.insurances}/> }
      </>
    );
  }
}

export default App;