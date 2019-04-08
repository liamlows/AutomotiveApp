import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {InsuranceForm} from './InsuranceForm';
import { NewInsurance } from './NewInsurance';
import { Insurance } from './Insurance.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCar, faKey, faBuilding } from '@fortawesome/free-solid-svg-icons';
import MyShop from './MyShop';

library.add(faEnvelope, faCar, faKey, faBuilding);

class App extends Component {

  state = {
    insurances:[
      
    ],
    editMode: false
  }
  

  onNewInsurance(insurance){
    this.setState(state => {state.insurances.push(insurance); 
      state.editMode = true; 
      return state;
    })}
  

  render() {
    return (
      <>
        {/* <MyShop /> */}
        <InsuranceForm onNewInsurance={a => this.onNewInsurance(a)}/> 
    { this.state.editMode && <NewInsurance insurances={this.state.insurances} /> }
      </>
    );
  }
}

export default App;
