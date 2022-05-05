import { data, HeaderSlider, Services, News, About, Contact, Whyjoin, Partners } from '../Common';
//import './Body.css';
import React, { useEffect, useRef } from "react";

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
        </div>
    );
}
export default Home;