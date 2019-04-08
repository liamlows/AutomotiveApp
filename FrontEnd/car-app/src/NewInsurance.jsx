import React, { Component } from 'react';

export const NewInsurance = (props) => (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Policy Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.insurances.map((a,i) =>
                        <tr key={i}>
                            <td>{a.email}</td>
                            <td>{a.companyName}</td>
                            <td>{a.policyNumber}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
);

export default NewInsurance;