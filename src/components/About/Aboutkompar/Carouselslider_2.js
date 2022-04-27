import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carouselslider2() {
    return (
        <div className='acc'>
            <OwlCarousel className='owl-theme'
                loop='true'
                autoplay='true'
                autoplayTimeout='3000'
                items='1'
                dotsClass='dc'
                animationout='true'
                animateIn='true'
                slideBy={1} >

                <img
                    className="s2"
                    src={require("../../../images/slider2/1.jpg")}
                    alt="" />


                <img
                    className="s2"
                    src={require("../../../images/slider2/2.jpg")}
                    alt="" />


                <img
                    className="s2"
                    src={require("../../../images/slider2/3.jpg")}
                    alt="" />

            </OwlCarousel>
        </div>
    );

}
export default Carouselslider2;