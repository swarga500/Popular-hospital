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
           {
               services.map(service => <Service
               key={service.id}
               service={service}
               ></Service>)
           }
        </div>
    );
};

export default Services;