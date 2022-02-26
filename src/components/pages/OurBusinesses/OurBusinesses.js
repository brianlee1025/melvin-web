import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import "./OurBusinesses.css";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const OurBusinesses = (props) => {
  return (
    <div className="noto-sans-sc bold">
      <div className="w-100">
        <Image
          src={public_img_path + "our_business.jpg"}
          fluid
          alt="our-busineess img"
        />
      </div>

      <div className="container pt-4 ">
        <Row className="mt-5">
          <Col md={6}>
            <Card
              className="mb-5 businesses-card"
              onClick={() => {
                window.location = "/our-businesses/our-services";
              }}
            >
              <Card.Img src="img/our-services.jpg" alt="Our Services" />
              <Card.ImgOverlay className="noto-sans-sc bold">
                OUR SERVICES
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="mb-5 businesses-card"
              onClick={() => {
                window.location = "/our-businesses/our-products";
              }}
            >
              <Card.Img src="img/our-products.jpg" alt="Our Products" />
              <Card.ImgOverlay className="noto-sans-sc bold">
                OUR PRODUCTS
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurBusinesses;
