import React from "react";
import "./HomePage.css";
import ReactPlayer from "react-player";
import { Card, Col, Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Products } from "../../enum/Products";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div align="center">
      <div className="player-wrapper">
        <ReactPlayer
          onContextMenu={(e) => e.preventDefault()}
          url="vid/home_intro.mp4"
          className="react-player"
          loop={true}
          playing={true}
          volume={0}
          width="100%"
          height="100%"
        />
      </div>

      <div className="section">
        <Slide left>
          <Row>
            <Col md={12} className="sectionTitle">
              Discover Our Story
            </Col>
          </Row>
          <Row>
            <Col md={12} className="sectionBody">
              Since its inception in 2015, MMT Trading has been established
              as...
            </Col>
            <Col md={12} className="sectionBody">
              <a href="/aboutUs">Read More</a>
            </Col>
          </Row>
        </Slide>
      </div>

      <div className="section">
        <Slide left>
          <Row>
            <Col md={12} className="sectionTitle">
              Our Products
            </Col>
          </Row>
          <Row>
            <Col md={12} className="sectionBody">
              <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {Products.map((prod, index) => {
                  return (
                    <Card key={index}>
                      <Card.Img
                        variant="top"
                        src={prod.img}
                        style={{ padding: "2em 2em 2em 2em" }}
                      />
                      <Card.Body>
                        <Card.Text>{prod.title}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Slide>
      </div>

      <div className="section">
        <Slide left>
          <Row>
            <Col md={12} className="sectionTitle">
              Our Businesses
            </Col>
          </Row>
          <Row>
            <Col md={6} className="sectionBody">
              Find Us
            </Col>
            <Col md={6} className="sectionBody">
              Sales Marketing Office
            </Col>
          </Row>
        </Slide>
      </div>
    </div>
  );
};

export default HomePage;
