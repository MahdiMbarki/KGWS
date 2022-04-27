import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Kompar.css';
function KomparSlider() {
    return (
        <div className="KomparSlider">
            <OwlCarousel className='owl-theme'
                loop='true'
                autoplay='true'
                autoplayTimeout='3000'
                items='1'
                dotsClass='dc'
                autoplayHoverPause='true'
                animationOut='true'
                animateIn='true'
                slideBy={1}
            >
                <img src={require('../../images/komparslider/1.jpg')} alt='' />
                <img src={require('../../images/komparslider/2.jpg')} alt='' />
                <img src={require('../../images/komparslider/3.jpg')} alt='' />
            </OwlCarousel>


        </div>
    );
}
export default KomparSlider;