import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselLanding = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/pic1.jpeg'}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/pic2.jpeg'}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/images/pic3.jpeg'}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselLanding;