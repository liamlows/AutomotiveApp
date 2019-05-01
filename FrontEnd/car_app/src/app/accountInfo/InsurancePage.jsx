import React, { Component } from "react";
import {InsuranceForm} from './InsuranceForm';
import { InsuranceInfo } from './InsuranceInfo';

class InsurancePage extends Component {
    state = {
        // insurances:[
      
        // ],
        editMode:false
    }

    // onNewInsurance(insurance){
    //     this.setState(state => {state.insurances.push(insurance); 
          
    //       return state;
    // })}

    render() {
        return (
            <div>
               {!this.state.editMode && (localStorage.getItem('insurancePhone') == null) && <InsuranceForm  /> }
                {!this.state.editMode && (localStorage.getItem('insurancePhone') != null) && <InsuranceInfo  /> }
            </div>
        );
    }
}

export default InsurancePage;