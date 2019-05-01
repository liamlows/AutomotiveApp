import React from 'react';
import { AccountRepo } from '../../api/AccountRepo';

export class InsuranceInfo extends React.Component { 

    accountRepo = new AccountRepo();

    state = {
        insurance_editMode:false,
        account_editMode: false,
        insurance_phone: localStorage.getItem('insurancePhone'),
        comp_name: localStorage.getItem('companyName'),
        policy_number: localStorage.getItem('policyNum'),
        user_fname: localStorage.getItem('firstName'),
        user_lname: localStorage.getItem('lastName'),
        user_email: localStorage.getItem('email')

    }

    editAccount() {
        this.setState({
            account_editMode: true
        })
    }

    editInsurance() {
        this.setState({
            insurance_editMode: true
        })
    }

    saveAccount() {
        let userId = localStorage.getItem('uID');
        if (userId){
            this.accountRepo.updateEmail(userId, this.state.user_email)
            .then(localStorage.setItem('email', this.state.user_email));
            this.accountRepo.updateFname(userId, this.state.user_fname)
            .then(localStorage.setItem('firstName', this.state.user_fname));
            this.accountRepo.updateLname(userId, this.state.user_lname)
            .then(localStorage.setItem('lastName', this.state.user_lname));
        }
        this.setState({
            account_editMode:false
        })
        
    }

    saveInsurance() {
        let userId = localStorage.getItem('uID');
        if (userId){
            this.accountRepo.updateInsurancePhone(userId,this.state.insurance_phone)
            .then(localStorage.setItem('insurancePhone', this.state.insurance_phone));
            this.accountRepo.updateInsuranceCom(userId, this.state.comp_name)
            .then(localStorage.setItem('companyName', this.state.comp_name));
            this.accountRepo.updateInsurancePolicyNum(userId, this.state.policy_number)
            .then(localStorage.setItem('policyNum', this.state.policy_number));
            
        }
        this.setState({
            insurance_editMode: false
        })
        // this.props.insurances.map((a) => a.changeInfo(this.state.insurance_phone, this.state.comp_name, this.state.policy_number))
        // this.setState({
        //     insurance_editMode: false
        // })
    }

    render(){
        return(
            <>
                <div className="card m-5">
                    <div className="card-header">
                        <h3>Account Information</h3>
                    </div>
                    <div className="card-body">
                        <div style={{margin:"3em"}}>
                            {!this.state.account_editMode && (  
                                <>
                                    <p ><h5 className="d-inline">Your Email:</h5>{this.state.user_email}</p>
                                    <p ><h5 className="d-inline">Your First Name:</h5> {this.state.user_fname}</p>
                                    <p ><h5 className="d-inline">Your Last Name:</h5> {this.state.user_lname}</p>
                                    
                                    <button className="btn btn-primary float-right" onClick={() => this.editAccount()}>Edit</button>
                                </>
                                )}
                                {this.state.account_editMode && ( 
                                <>
                                    <h5 className="d-block-inline">Your Email:</h5><input  id="email" type="email" placeholder="Enter email" style={{maxWidth:"40%"}} value={this.state.user_email} onChange={e => this.setState({user_email:e.target.value})}/>
                                    <h5 className="d-block-inline">Your First Name:</h5> <input  id="fname" type="name" placeholder="Enter First Name" style={{maxWidth:"40%"}} value={this.state.user_fname} onChange={e => this.setState({user_fname:e.target.value})}/>
                                    <h5 className="d-block-inline">Your Last Name:</h5> <input  id="lname" type="name" placeholder="Enter Last Name" style={{maxWidth:"40%"}} value={this.state.user_lname} onChange={e => this.setState({user_lname:e.target.value})}/>
                                    <button className="btn btn-success float-right" onClick={() => this.saveAccount()}>Save</button>
                                </>
                                )}
                            
                        </div>
                        
                    </div>
                </div>
                <div className="card m-5">
                    <div className="card-header">
                        <h3>Insurance Information</h3>
                    </div>
                    <div className="card-body">
                        <div style={{margin:"3em"}}>
                            {!this.state.insurance_editMode && 
                                <>
                                    <p ><h5 className="d-inline">Insurance Email:</h5>{this.state.insurance_phone}</p>
                                    <p ><h5 className="d-inline">Company Name:</h5> {this.state.comp_name}</p>
                                    <p ><h5 className="d-inline">Policy Number:</h5> {this.state.policy_number}</p>
                                    <button className="btn btn-primary float-right" onClick={() => this.editInsurance()}>Edit</button>
                                </>
                                    
                            }
                            {this.state.insurance_editMode && 
                                <>
                                    <h5 className="d-block-inline">Insurance Phone:</h5><input className="d-inline" id="phone" type="phone" placeholder="Enter phone number" style={{maxWidth:"40%"}} value={this.state.insurance_phone} onChange={e => this.setState({insurance_phone:e.target.value})}/>
                                    <h5 className="d-block-inline">Company Name:</h5><input  id="name" type="name" placeholder="Enter Company Name" style={{maxWidth:"40%"}} value={this.state.comp_name} onChange={e => this.setState({comp_name:e.target.value})}/>
                                    <h5 className="d-block-inline">Policy Number:</h5><input  id="policy" type="text" placeholder="Enter Policy Number" style={{maxWidth:"40%"}} value={this.state.policy_number} onChange={e => this.setState({policy_number:e.target.value})}/>
                                    <button className="btn btn-success float-right" onClick={() => this.saveInsurance()}>Save</button>
                                </>   
                            }
                            
                           
                        </div>
                        
                    </div>
                </div>
            </>
     )
    }
};
export default InsuranceInfo;