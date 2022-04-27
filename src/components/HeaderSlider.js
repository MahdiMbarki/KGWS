import React from 'react'
import { Carousel } from 'react-bootstrap'


const HeadSlider = () => {
    return (

        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption'>
                        <h1>PLUS LOIN ENSEMBLE</h1>
                        <p>LE FUTUR ET TOUTES LES RAISONS D Y CROIRE</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className='caption'>
                        <h1>ENSEMBLE POUR UNE EXPÉRIENCE PROFESSIONNELLE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                />
                <Carousel.Caption >
                    <div className='caption'>
                        <h1 className='caption'>DES SOLUTIONS D'EXPERTS POUR VOUS</h1>
                        <p>KOMPAR EST UNE SOLUTION POUR DE NOMBREUX AVANTAGES</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default HeadSlider;