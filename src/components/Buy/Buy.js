import React from 'react';
import { useParams } from 'react-router';

const Buy = () => {
    const {serviceId} = useParams()
    return (
        <div className="text-center">
            <h2 className="mt-2">Order ID: {serviceId}</h2>
            <h4>Phone :013849955</h4>
            <p>please call and email us for booking your need.
                <br /> if need More contact option, visit our contact page</p>
            
        </div>
    );
};

export default Buy;