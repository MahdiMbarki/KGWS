
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './Partners.css';
function Partners(props) {
    return (
        <div className='container'>
            <div className="nine">
                <h1>NOS CLIENTS<span>Ils nous font confiance
                </span></h1>
            </div>
            <div className='partnersc'>
                <OwlCarousel className='owl-theme'
                    loop='true'
                    autoplay='true'
                    autoplayTimeout='1200'
                    items='6'
                    margin={50}
                    dotsClass='dc'
                    autoplayHoverPause='true'
                    animationout='true'
                    animateIn='true'
                    slideBy={2}
                >
                    {props.data ? props.data.clientslogos.map((d, i) => (
                        <img alt="" className='item' src={d} />
                    ))
                        : "loading..."}

                </OwlCarousel>

            </div >
        </div>
    );

}
export default Partners;