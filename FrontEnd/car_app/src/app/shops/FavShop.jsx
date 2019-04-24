import React from 'react';

export const FavShop = (props) => {
        return(    
        <div className="card">
            <div className="card-header">
                <span style={{marginRight:'.2em'}}><i className="fa fa-heart"></i></span>
                <h5 style={{display:'inline-block',marginBottom:'0em'}}>Your Favorite Shop</h5>
            </div>
            <div className="card-body">
                <div className="row" style={{marginBottom:'0em'}}>
                    <div className="col">
                        <h6 style={{marginBottom:'0em'}}>{props.favShop.name}</h6>
                        {
                            (props.favShop.rating!=='' && props.favShop.rating) ? 
                                <h6 className="text-secondary" style={{marginBottom:'.08em'}}>Rating: {props.favShop.rating}</h6> 
                                : <div></div>
                        }
                        <h6 className="text-secondary">{props.favShop.address}</h6>
                    </div>
                    <div className="col">
                        {
                            ( props.favShop.open_now !== 'undefined' && props.favShop.open_now !== '') ? 
                                <div>
                                    { props.favShop.open_now ? 
                                        <span className="badge badge-success float-right">Open Now!</span>
                                        : <span className="badge badge-danger float-right">Currently Closed</span>
                                    }
                                </div> 
                                : <div></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavShop;