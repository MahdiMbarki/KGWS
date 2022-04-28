import { Kompar, Partnershipform } from '../Common';
import React, { useEffect, useRef } from "react";

//import './Body.css';
function Partenariat() {
    const topContainer = useRef();
    useEffect(() => {

        // To make sure page starts from the top
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);
    return (

        <div>
            <div ref={topContainer} />
            <div className="Partenariat">
                <Kompar />
                <Partnershipform />
            </div>


        </div>
    );
}
export default Partenariat;