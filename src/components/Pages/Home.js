import { data, HeaderSlider, Services, News, About, Contact, Whyjoin, Partners } from '../Common';
//import './Body.css';
import React, { useEffect, useRef } from "react";
import CookieConsent from 'react-cookie-consent';

function Home() {

    const topContainer = useRef();

    useEffect(() => {
        // To make sure page starts from the top
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);
    return (

        <div className='Homepage'>
            <div ref={topContainer} />
            <HeaderSlider />
            <About />
            <Whyjoin />
            <Partners data={data} />
            <Services />
            <News />
            <Contact />
            <CookieConsent debug={true}>this site use cookies</CookieConsent>

        </div>
    );
}
export default Home;