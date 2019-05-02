import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccountRepo } from './../../api/AccountRepo';

export class InsuranceForm extends React.Component {
    accountRepo = new AccountRepo();
    
    state = {
        phone: '',
        company: '',
        policy_num: ''
    }

    onSubmit () {
        var userId = localStorage.getItem('uID');
        if (userId){
            this.accountRepo.updateInsurancePhone(userId, {'insurance_phone': this.state.phone})
            .then(localStorage.setItem('insurancePhone', this.state.phone));
            this.accountRepo.updateInsuranceCom(userId, {'insurance_company': this.state.company})
            .then(localStorage.setItem('companyName', this.state.company));
            this.accountRepo.updateInsurancePolicyNum(userId, {'insurance_num': this.state.policy_num})
            .then(localStorage.setItem('policyNumber', this.state.policy_num));
            this.setState({
                phone:'',
                company: '',
                policy_num:''
            })
            window.location.reload();
        }
        // this.props.onNewInsurance(new Insurance(this.state.phone, this.state.company, this.state.policy_num))
        // this.setState({
        //     phone: '',
        //     company: '',
        //     policy_num : ''
        // })

    }

    render(){
        return (
            <div className="card m-5">
                    <h1 style={{margin:"0.5em"}}>Insurance Policy Form</h1>

                    <form style={{margin:"2em", marginBottom:'0em'}} >
                        <div className="form-group ">
                            <label for="phone"><FontAwesomeIcon icon="envelope" size="lg"/> Insurance Phone Number</label>
                            <input className="d-block form-control" id="phone" type="phone" placeholder="Enter Phone Number" style={{maxWidth:"40%"}} value={this.state.phone} onChange={e => this.setState({phone:e.target.value})}/>
                            <Form.Text className="text-muted">
                                We'll never share your phone number with anyone else.
                            </Form.Text>
                        </div>
                        <br></br>
                        <div className="form-group ">
                            <label for="company"><FontAwesomeIcon icon="building" size="lg" /> Insurance Company</label>
                            <input className="d-block form-control" id="company" type="text" placeholder="Enter Company Name" style={{maxWidth:"40%"}} value={this.state.company} onChange={e => this.setState({company:e.target.value})}/>
                        </div>
                        <br></br>
                        <div className="form-group ">
                            <label for="policy"><FontAwesomeIcon icon="key" size="lg" /> Policy Number</label>
                            <input className="d-block form-control" id="policy" type="text" placeholder="Enter Insurance number" style={{maxWidth:"40%"}} value={this.state.policy_num} onChange={e => this.setState({policy_num:e.target.value})}/>    
                        </div>  
                    </form>
                    <button className="btn btn-primary btn-block" type="submit" onClick={() => this.onSubmit()} style={{margin:"2em", width:'6em'}}>
                        Submit
                    </button>
            </div>
        )
    }
}
export default InsuranceForm;