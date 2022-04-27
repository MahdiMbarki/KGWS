import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './Partners.css';
function Partners() {
    return (
        <div className='container'>
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
                    <img alt='' className='item' src={require('../../images/clients-logo/client1.png')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client2.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client3.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client4.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client5.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client6.png')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client7.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client8.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client9.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client10.jpg')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client11.png')} />
                    <img alt='' className='item' src={require('../../images/clients-logo/client12.png')} />

                </OwlCarousel>

            </div >
        </div>
    );

}
export default Partners;