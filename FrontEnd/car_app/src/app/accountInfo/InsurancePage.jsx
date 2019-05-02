import React, { Component } from "react";
import {InsuranceForm} from './InsuranceForm';
import { InsuranceInfo } from './InsuranceInfo';

class InsurancePage extends Component {

    render() {

        return (
            <div>
                {(localStorage.getItem('insurancePhone') != null) && <InsuranceInfo null={localStorage.getItem('insurancePhone') === 'null'} /> }
                {(localStorage.getItem('insurancePhone') === 'null') && <InsuranceForm  /> }
            </div>
        );
    }
}

export default InsurancePage;