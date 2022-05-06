import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { data } from '../Common'
//import './Kompar.css';
function KomparSlider() {
    return (
        <div className="KomparSlider">
            <OwlCarousel className='owl-theme'
                loop='true'
                autoplay='true'
                autoplayTimeout='7000'
                items='1'
                dotsClass='dc'
                animationout='true'
                animateIn='true'
                slideBy={1}
            >
                {data ? data.page2.slider2.map((d, i) => (
                    <img key={`${d}-${i}`} src={d} alt="sliderimage" />
                )) : 'loading...'}
            </OwlCarousel>


        </div>
    );
}
export default KomparSlider;