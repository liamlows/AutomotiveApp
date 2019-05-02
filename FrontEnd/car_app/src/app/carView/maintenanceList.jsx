import React from 'react';

const MaintenanceList = (props) => (
  <div>
    {
        props.records.map( (a, i) => 
        <div key={i} className="card" style={{marginBottom:'1.5em'}}>
            <div className="card-header">
                <button className="btn btn-danger btn-sm float-right" style={{textAlign:'center', verticalAlign:'bottom'}} onClick={e => props.onDelete(a.m_id)}>
                    <i className="fa fa-trash" ></i>&nbsp;
                </button>
                <h5 className="">{a.type}</h5>
            </div>
            <div className="card-body">
            <h6 className="">Date of Service: { a.date_serviced }</h6>
            <h6 className="">Cost of Service: ${ a.cost }</h6>
            <h6 className="">Miles at Service: { a.last_mileage }</h6>
            <h6 className="text-muted">{ a.description }</h6>
            </div>
        </div>
        )

    }
  </div>
);

export default MaintenanceList;