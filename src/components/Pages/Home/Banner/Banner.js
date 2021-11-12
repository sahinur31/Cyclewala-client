import React from 'react';
import img1 from '../../../images/slider1.jpg';
import img2 from '../../../images/slider2.jpg';
import img3 from '../../../images/slider3.jpg';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
           <Carousel fade>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-md-8 col">
                                <h3>New Collection</h3>
                                <button className="btn theme-bg text-white">Shop Now</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide" />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-md-8 col">
                                <h3>New Collection</h3>
                                <button className="btn theme-bg text-white">Shop Now</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="single-slide-item">
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-md-8 col">
                                <h3>New Collection</h3>
                                <button className="btn theme-bg text-white">Shop Now</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* slider end */} 
        </>
    );
};

export default Banner;