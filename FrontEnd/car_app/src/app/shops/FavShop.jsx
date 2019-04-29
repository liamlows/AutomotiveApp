
import React from 'react';

export const FavShop = (props) => {
        return(    
        <div className="card" style={{fontFamily:'Arial'}}>
            <div className="card-header">
                <span style={{marginRight:'.4em'}}><i className="fa fa-heart" style={{marginBottom:'.3em'}}></i></span>
                <h5 style={{display:'inline-block',marginBottom:'0em'}}><b>Your Favorite Shop</b></h5>
            </div>
            <div className="card-body">
                <div className="row" style={{marginBottom:'0em'}}>
                    <div className="col">
                        <h5 style={{marginBottom:'0em'}}>{props.favShop.name}</h5>
                        {
                            (props.favShop.rating!=='' && props.favShop.rating) ? 
                                <h6 className="text-muted" style={{marginBottom:'.08em'}}>Rating: {props.favShop.rating}</h6> 
                                : <div></div>
                        }
                        <h6 className="text-muted">{props.favShop.address}</h6>
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