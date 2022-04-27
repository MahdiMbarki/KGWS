import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Headerslider.css';

function HeaderSlider() {
    return (
        <div className='Carousel'>
            <Carousel interval={2500}>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={require('../../images/slider1/1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='caption'>
                            <h5>Plus Loin Ensemble</h5>
                            <h6>LE FUTUR ET TOUTES LES RAISONS D Y CROIRE</h6>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={require('../../images/slider1/2.jpg')}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className='caption'>
                            <h5>Prêt à relever des défis ?</h5>
                            <h6>Demande de partenariat</h6>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={require('../../images/slider1/3.jpg')}
                        alt="Third slide"
                    />
                    <Carousel.Caption >
                        <div className='caption'>
                            <h5 >Des Solutions D'expert Pour Vous</h5>
                            <h6>KOMPAR EST UNE SOLUTION POUR DE NOMBREUX AVANTAGES</h6>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default HeaderSlider;