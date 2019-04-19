import React, { Component } from "react";
import {InsuranceForm} from './InsuranceForm';
import { InsuranceInfo } from './InsuranceInfo';

class InsurancePage extends Component {
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
            <div>
               {!this.state.editMode && (this.state.insurances.length === 0) && <InsuranceForm onNewInsurance={a => this.onNewInsurance(a)}/> }
                {!this.state.editMode && (this.state.insurances.length !== 0) && <InsuranceInfo insurances={this.state.insurances}/> }
            </div>
        );
    }
}

export default InsurancePage;