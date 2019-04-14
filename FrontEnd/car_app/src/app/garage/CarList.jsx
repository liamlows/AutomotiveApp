import React from 'react';

const CarList = (props) => (
  <div >
    {
        props.cars.map( (a, i) => 
        <div key={i} className="card" style={{margin:"0.5em"}}>
            <div className="card-header">   
                {a.name}
            </div>
            <div className="card-body">
            <div className="row justify-content-between">
                <div className="col">
                    <h6 className="text-muted">{a.make}</h6>
                </div>
                <div className="col">
                    <h6 className="text-muted float-right">{a.model}</h6>
                </div>
            </div>
                <p>{a.year}</p>
            </div>
        </div>
        )

    }
  </div>
);

export default CarList;