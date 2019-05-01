import React from 'react';
import { Link } from 'react-router-dom'
// import { Button, Carousel, Image } from "react-bootstrap";


export const CarList = (props) => (
    <div>

        {!props.cars.length 
            ? <div className="alert alert-success">It looks like you don't have any cars in your garage yet... Add one by clicking the plus button!</div>
            :
            <div className="row justify-content-around" style={{marginTop:'2em'}}>
            {
                props.cars.map( (a, i) => 
                <div key={i} className="card col-md-5" style={{margin:'1em',padding:'.5em'}}>
                    <div className="card-body" style={{padding:'0em'}}>
                        <Link to={`/car/${a.c_id}`} className="btn btn-primary float-right" style={{marginBottom:'.75em'}}>
                            <i className="fa fa-cogs"></i>&nbsp;
                            {
                                a.current_mileage - a.milesAtLastMaintenance > 5000
                                || a.current_mileage - a.milesAtLastOilChange > 5000
                                || a.current_mileage - a.milesAtLastTireChange > 5000
                                ? <button className="btn btn-danger btn-sm" style={{borderRadius:'1em',fontSize: '.05em'}}>
                                <i className="fa fa-exclamation"></i>&nbsp;
                                </button>
                                :
                                a.current_mileage - a.milesAtLastMaintenance > 2000
                                || a.current_mileage - a.milesAtLastOilChange > 2000
                                || a.current_mileage - a.milesAtLastTireChange > 2000
                                ? <button className="btn btn-warning btn-sm" style={{borderRadius:'1em',fontSize: '.05em'}}>
                                <i className="fa fa-exclamation-triangle"></i>&nbsp;
                                </button>
                                : <div></div>
                            }
                        </Link>
                        <div className="row justify-content-between align-items-center" style={{margin:'0em'}}>
                            <div className="col">
                                <img className="" src={`icons/${a.MAKE.toLowerCase()}.png`} alt="Make" style={{width:'100%',height:'21vh'}}/>
                            </div>
                            <div className="col"  id="car-content">
                                <h3 className="">{ a.MAKE }</h3>
                                <h4 className="">{ a.MODEL }</h4>
                                <h4 className="">{ a.YEAR }</h4>
                                {
                                    (a.current_mileage !== 'undefined' && a.current_mileage !== undefined && a.current_mileage !== '') ? <h5 className="text-muted">{ a.current_mileage } miles</h5> : <div></div>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
        }
    </div>
);

export default CarList;