import React, { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useState(() =>{
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services">
            <br />
            <br />
            <h1 className="text-warning mx-auto">Our Services</h1>
            <div id="services" className="row my-2 mb-5 row-cols-1 row-cols-md-3 row-cols-sm-1 g-4">
           {
               services.map(service => <Service
               key={service.id}
               service={service}
               ></Service>)
           }
        </div>
        </div>
    );
};

export default Services;