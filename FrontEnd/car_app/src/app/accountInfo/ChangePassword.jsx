import React, { Component } from "react";
import MyNav from "../home/MyNav";
import { Redirect } from 'react-router-dom'
import { AccountRepo } from "../../api/AccountRepo";
import LoginRepo from "../../api/loginRepo";

export class ChangePassword extends Component {


    accountRepo = new AccountRepo();
    loginRepo = new LoginRepo();

    state = {
        current_password: '',
        new_password_1: '',
        new_password_2: '',
        error_1: false,
        error_2: false,
        redirect: ''
    }

    onSubmit() {
        var user = {
            email: localStorage.getItem('email'),
            password: this.state.current_password
        }

        let userId = localStorage.getItem('uID');

        this.loginRepo.loginUser(user)
        .then(() => {
            if(localStorage.getItem('code') !== '200'){
                this.setState({
                    current_password: '',
                    new_password_1: '',
                    new_password_2: '',
                    error_1: true,
                    error_2: false
                })
            }
            else if (this.state.new_password_1 !== this.state.new_password_2){
                this.setState({
                    current_password: '',
                    new_password_1: '',
                    new_password_2: '',
                    error_1: false,
                    error_2: true
                })
            }
            else {
                this.accountRepo.updatePassword(userId, {password:this.state.new_password_1} )
                .then(
                    this.setState({
                    redirect:"/password/success/:id"
                    })
                )
                
            }
        })
    }

    render() {
        if(this.state.redirect){
            return (
                <Redirect to={{pathname:this.state.redirect}}/>
            )
        }
        return (
        <div className="">
            <div><MyNav /></div>
            
            <div className="card" style={{margin:"2em"}}>
                <div className="card-header">
                    <h1>Change Password</h1>
                </div>
                <div className="card-body">
                        <form style={{margin:"2em"}} >
                            <div className="form-group ">
                                <label for="current">Current Password</label>
                                <input className="d-block form-control" id="current" type="password" placeholder="Enter Current Password" style={{maxWidth:"60%"}} value={this.state.current_password} onChange={e => this.setState({current_password:e.target.value})}/>
                            </div>
                            <br></br>
                            <div className="form-group ">
                                <label for="new-1">New Password</label>
                                <input className="d-block form-control" id="new-1" type="password" placeholder="Enter New Password" style={{maxWidth:"60%"}} value={this.state.new_password_1} onChange={e => this.setState({new_password_1:e.target.value})}/>
                            </div>
                            <br></br>
                            <div className="form-group ">
                                <label for="new-2">New Password Again</label>
                                <input className="d-block form-control" id="new-2" type="password" placeholder="Enter New Password Again" style={{maxWidth:"60%"}} value={this.state.new_password_2} onChange={e => this.setState({new_password_2:e.target.value})}/>    
                            </div>  
                        </form>
                        <button className="btn btn-primary" type="submit" onClick={() => this.onSubmit()} style={{margin:"2em"}}>
                                Submit
                        </button>
                        {this.state.error_1 && (
                            <div className="alert alert-danger" role="alert">
                                The current password is not matched!
                            </div>
                        )}
                        {this.state.error_2 && (
                             <div className="alert alert-danger" role="alert">
                                The two new password you typed are not matched!
                            </div>
                        )}
                </div>
            </div>
        </div>
        );
    }
}

export default ChangePassword;