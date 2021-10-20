import React from 'react';
import { useParams } from 'react-router';

const Buy = () => {
    const {serviceId} = useParams()
    return (
        <div className="text-center">
            <h2>Order ID: {serviceId}</h2>
            <h4>Phone :013849955</h4>
            <p>please call email us and booking your need.
                <br /> if need More contact option, visit our contact page</p>
            
        </div>
    );
};

export default Buy;