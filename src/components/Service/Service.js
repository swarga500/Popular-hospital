import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {Name,id, description, img,Price} = service;
    return (
        
            <div class="col">
    <div className="card h-100">
      <img src={img} className="card-img-top img-fluid p-2" height="250px" alt="..." />
      <div className="card-body">
        <h4 className="card-title">Name: {Name}</h4>
        <h4>Price: {Price}</h4>
        <h5 class="card-text">Details: {description}</h5>
        <Link className="btn btn-warning" to={`/buy/${id}`}>Book Now</Link>
      </div>
    </div>
  </div>
            
        
    );
};

export default Service;