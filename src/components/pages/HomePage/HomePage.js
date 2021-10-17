import React from 'react';
import './HomePage.css';
import { Carousel, Image, Button } from 'react-bootstrap';
import { slideShows } from '../../enum/HomePageSlides';
import { FaMapMarkerAlt } from "react-icons/fa";

const HomePage = () => {
    return (
        <div align="center">
            <Carousel fade variant="dark" controls={false} style={{textAlign: "center"}}>
                {slideShows.map((item, index) => {
                return <Carousel.Item key={index}>
                    <Image src={item.img_url} fluid style={{height: "auto", width: "100%"}}/>
                    <Carousel.Caption>
                    <h3>{item.label}</h3>
                    <p>{item.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                })}
            </Carousel>
            <div className="section" style={{backgroundColor: "grey", minHeight: "50px"}}>
                <h2>MMT Trading</h2>
            </div>

            <div className="section">
                <Image src={process.env.PUBLIC_URL + '/img/aboutUs.png'} fluid style={{height: "auto", width: "100%"}}/>
            </div>

            <div className="section">
                <Image src={process.env.PUBLIC_URL + '/img/f&bproducts.png'} fluid style={{height: "auto", width: "100%"}}/>
            </div>
            
            <div className="section">
                <Image src={process.env.PUBLIC_URL + '/img/packagingProducts.png'} fluid style={{height: "auto", width: "100%"}}/>
            </div>

            <div className="foot-print-div">
                <div className="vertical-center">
                    <Button clasvariant="success">Our Footprint&nbsp;<FaMapMarkerAlt style={{marginTop: "-5px"}}/></Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage