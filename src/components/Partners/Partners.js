import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './Partners.css';
function Partners(props) {
    const options = {
        loop: 'true',
        autoplay: 'true',
        margin:50,
        autoplayTimeout: '2000',
        items: '6',
        dotsClass: 'dc',
        autoplayHoverPause: 'true',
        animationout: 'true',
        animateIn: 'true',
        slideBy: 2,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            400: {
                items: 3,
                slideBy: 1,
            },
            600: {
                items: 2,
                slideBy: 2,
            },
            700: {
                items: 3,
                slideBy: 1,
            },
            1000: {
                slideBy: 2,
                items: 6,

            }
        }

    }


    return (
        <div className='container'>
            <div class="blog-head text-center">
            <h2>NOS CLIENTS</h2>
            <h6>Ils nous font confiance</h6>
          </div>
            <div className='partnersc'>
                <OwlCarousel className='owl-theme'
                    {...options}
                >
                    {props.data ? props.data.clientslogos.map((d, i) => (
                        <img key={i} alt="" className='item' src={d} />
                    ))
                        : "loading..."}

                </OwlCarousel>

            </div >
        </div>
    );

}
export default Partners;