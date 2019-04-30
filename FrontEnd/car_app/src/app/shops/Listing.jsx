import React from 'react';

const Listing = ( props ) => (
    <div >
    {
        props.places.map(p => {
            if(p.rating!=='' && p.rating){
                return (
                <div className="card" key={p.id} style={{padding:'.2em',margin:'.4em', marginBottom:'.55em', border:'none',fontFamily:'Arial'}}>
                    <div className="row justify-content-between" style={{marginBottom:'0em'}}>
                        <div className="col-md-10">
                            <h5 style={{marginBottom:'0em'}}>{p.name}</h5>
                            <h6 className="text-secondary" style={{marginBottom:'.08em'}}>Rating: {p.rating}</h6>
                            <h6 className="text-secondary">{p.vicinity}</h6>
                        </div>
                        <div className="col-md">
                            <button className="btn btn-sm btn-danger float-right"
                                    onClick={e => props.onShopClicked(p)}>
                                <i className="fa fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                );
            } 
            return (
                <div className="card" key={p.id} style={{padding:'.2em',margin:'.4em', marginBottom:'.55em', border:'none',fontFamily:'Arial'}}>
                    <div className="row justify-content-between" style={{marginBottom:'0em'}}>
                        <div className="col">
                            <h5 style={{marginBottom:'0em'}}>{p.name}</h5>
                            <h6 className="text-secondary">{p.vicinity}</h6>
                        </div>
                        <div className="col">
                            <button className="btn btn-sm btn-danger float-right"
                                    onClick={e => props.onShopClicked(p)}>
                                <i className="fa fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            );    
        })   
    }
    </div>

);

export default Listing;

