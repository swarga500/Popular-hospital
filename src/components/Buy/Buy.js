import React from 'react';
import { useParams } from 'react-router';

const Buy = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>booking {serviceId}</h2>
        </div>
    );
};

export default Buy;