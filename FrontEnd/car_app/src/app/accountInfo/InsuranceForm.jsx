import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccountRepo } from './../../api/AccountRepo';
import MyNav from "../home/MyNav";

export class InsuranceForm extends React.Component {
    accountRepo = new AccountRepo();
    
    state = {
        phone: '',
        company: '',
        policy_num: ''
    }

    onSubmit () {
        let userId = 5;
        if (userId){
            this.accountRepo.updateInsurancePhone(userId,this.state.phone)
            .then(localStorage.setItem('insurancePhone', this.state.phone));
            this.accountRepo.updateInsuranceCom(userId, this.state.company)
            .then(localStorage.setItem('companyName', this.state.company));
            this.accountRepo.updateInsurancePolicyNum(userId, this.state.policy_num)
            .then(localStorage.setItem('policyNum', this.state.policy_num));
            this.setState({
                phone:'',
                company: '',
                policy_num:''
            })
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
            <>
                <MyNav />
                <h1 style={{margin:"0.5em"}}>Insurance Policy Form</h1>

                <form style={{margin:"2em"}} >
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
                <button className="btn btn-primary" type="submit" onClick={() => this.onSubmit()} style={{margin:"2em"}}>
                        Submit
                    </button>

            </>
        )
    }
}
export default InsuranceForm;