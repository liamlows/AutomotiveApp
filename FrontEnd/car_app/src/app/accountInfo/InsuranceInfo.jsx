import React from 'react';

export class InsuranceInfo extends React.Component { 

    state = {
        insurance_editMode:false,
        account_editMode: false,
        insurance_phone: this.props.insurances.map((a) => {return a.email}),
        comp_name: this.props.insurances.map((a) => {return a.companyName}),
        policy_number: this.props.insurances.map((a) => {return a.policyNumber}),
        user_email: this.props.user.map((a) => {return a.email}),
        user_name: `${this.props.user.map((a) => {return a.lName})}  ${this.props.user.map((a) => {return a.fName})}`
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
        this.setState({
            account_editMode: false
        })
        
    }

    saveInsurance() {
        this.props.insurances.map((a) => a.changeInfo(this.state.insurance_phone, this.state.comp_name, this.state.policy_number))
        this.setState({
            insurance_editMode: false
        })
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
                            {!this.state.account_editMode && this.props.user.map((a,i) => 
                                <>
                                    <p ><h5 className="d-inline">Your Email:</h5>{this.state.user_email}</p>
                                    <p ><h5 className="d-inline">Your Name:</h5> {this.state.user_name}</p>
                                    
                                    <button className="btn btn-primary" onClick={() => this.editAccount()}>Edit</button>
                                </>
                                )}
                                {this.state.account_editMode && this.props.user.map((a,i) => 
                                <>
                                    <h5 className="d-inline">Your Email:</h5><input className="d-inline" id="email" type="email" placeholder="Enter email" style={{maxWidth:"40%"}} value={this.state.user_email} onChange={e => this.setState({user_email:e.target.value})}/>
                                    <h5 className="d-inline">Your Name:</h5> <input className="d-inline" id="email" type="email" placeholder="Enter email" style={{maxWidth:"40%"}} value={this.state.user_name} onChange={e => this.setState({user_name:e.target.value})}/>
                                    
                                    <button className="btn btn-success" onClick={() => this.saveAccount()}>Save</button>
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
                                    
                                    <div className="jumbotron">
                                        <h5 className="display-4">Policy</h5>

                                    </div>
                                    <button className="btn btn-primary" onClick={() => this.editInsurance()}>Edit</button>
                                </>
                                    
                            }
                            {this.state.insurance_editMode && 
                                <>
                                    <h5 className="d-block-inline">Insurance Phone:</h5><input className="d-inline" id="phone" type="phone" placeholder="Enter phone number" style={{maxWidth:"40%"}} value={this.state.insurance_phone} onChange={e => this.setState({insurance_phone:e.target.value})}/>
                                    <h5 className="d-block-inline">Company Name:</h5><input  id="email" type="email" placeholder="Enter email" style={{maxWidth:"40%"}} value={this.state.comp_name} onChange={e => this.setState({comp_name:e.target.value})}/>
                                    <h5 className="d-block-inline">Policy Number:</h5><input  id="email" type="email" placeholder="Enter email" style={{maxWidth:"40%"}} value={this.state.policy_number} onChange={e => this.setState({policy_number:e.target.value})}/>
                                    
                                    <div className="jumbotron">
                                        <h5 className="display-4">Policy</h5>

                                    </div>
                                    <button className="btn btn-success" onClick={() => this.saveInsurance()}>Save</button>
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