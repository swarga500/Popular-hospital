import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {Name,id, description, img} = service;
    return (
        <div>
            <h2> {description}</h2>
            <h1>{Name}</h1>
            <Link to={`/buy/${id}`}>Buy</Link>
        </div>
    );
};

export default Service;