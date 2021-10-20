import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            
            <Services></Services>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;