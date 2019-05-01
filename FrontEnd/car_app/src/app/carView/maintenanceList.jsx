import React from 'react';

const MaintenanceList = (props) => (
  <div>
    {
        props.records.map( (a, i) => 
        <div key={i} className="card" style={{marginBottom:'1.5em'}}>
            <div className="card-header">
                <h5>{a.type}</h5>
            </div>
            <div className="card-body">
            {/* <div className="row justify-content-start">
                <div className="col">
                   
                </div>
                <div className="col">
                    
                </div>
            </div> */}
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