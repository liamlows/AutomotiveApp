import React from 'react';

export class InsuranceInfo extends React.Component { 



    render(){
        return(
            <div>
                <h1 className="d-inline" >Insurance Information</h1>
                <button className="btn btn-success float-right " style={{margin:"0.5em"}} >Edit</button>
                <div style={{margin:"3em"}}>
                    {this.props.insurances.map((a,i) => 
                        <>
                            <p ><h5 className="d-inline">Your Email:</h5>{a.email}</p>
                            <p ><h5 className="d-inline">Company Name:</h5> {a.companyName}</p>
                            <p ><h5 className="d-inline">Policy Number:</h5> {a.policyNumber}</p>
                            
                            <div className="jumbotron">
                                <h5 className="display-4">Policy</h5>

                            </div>
                        </>
                        )}
                </div>
            </div>
     )
    }
};
export default InsuranceInfo;