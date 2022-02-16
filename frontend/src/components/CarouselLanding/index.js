import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

const CarouselLanding = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + '/images/pic1.jpg'}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + '/images/pic2.jpg'}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + '/images/pic3.jpg'}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselLanding;