import { HeaderSlider, Services, News, About, Contact, Whyjoin } from '../Common';
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

            <div ref={topContainer}/>

            <HeaderSlider />
            <About  />
            <Services />
            <Whyjoin />
            <News />
            <Contact />
        </div>
    );
}
export default Home;