import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Headerslider.css';
import { data } from '../Common'

function HeaderSlider() {
    return (
        <div className='Carousel'>
            <Carousel fade>
                {data ? data.slider.map((d, i) => (
                    <Carousel.Item key={`${d}-${i}`} >
                        <img className="d-block w-100" alt="" src={d.image} />
                        <Carousel.Caption>
                            <div className='caption'>
                                <h5>{d.title}</h5>
                                <h6>{d.subtitle}</h6>
                            </div>
                        </Carousel.Caption>

                    </Carousel.Item>
                )) : "loading"}


            </Carousel>
        </div>

    )
}

export default HeaderSlider;