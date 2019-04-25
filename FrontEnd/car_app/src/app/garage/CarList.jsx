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
                        {/* <Link to={`/car/${a.id}`} className="btn btn-primary float-right" style={{marginBottom:'.75em'}}> */}
                        <Link to="/car" className="btn btn-primary float-right" style={{marginBottom:'.75em'}}>
                            <i className="fa fa-edit"></i>&nbsp;
                        </Link>
                        <div className="row justify-content-between align-items-center" style={{margin:'0em'}}>
                            <div className="col">
                                <img className="img-fluid" src={a.imgPath} alt="Make" style={{width:'100%',height:'21vh'}}/>
                            </div>
                            <div className="col"  id="car-content">
                                <h3 className="">{ a.make }</h3>
                                <h4 className="text-muted">{ a.model }</h4>
                                <h4 className="text-muted">{ a.year }</h4>
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