import React from "react";
import "./HomePage.css";
import ReactPlayer from "react-player";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
// import Slide from "react-reveal/Slide";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Products } from "../../enum/Products";
import { Services } from "../../enum/Services";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const HomePage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 360 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 360, min: 0 },
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

      <div className="w-100 mt-3">
        {/* <Slide left> */}
        <div className="container">
          <Row>
            <Col md={12} className="noto-sans-sc bold sectionTitle">
              DISCOVER OUR STORY
            </Col>
          </Row>
          <Row>
            <Col
              md={12}
              className="mt-3 mb-4 noto-sans-sc sectionBody discoverStory"
            >
              <p className="bold">Frozon Food Speicialist</p>
              <p>
                Since its inception in 2015, MMT Trading has been established as
                frozen food specialist.
              </p>
              <p>
                We are local provider of frozen food and mainly targeting in
                halal market over the states.
              </p>
            </Col>
            <Col md={12} className="sectionBody">
              <Button
                size="lg"
                style={{
                  backgroundColor: "transparent",
                  color: "#234ea2",
                  fontSize: "1.5rem",
                }}
                onClick={() => {
                  window.location = "/aboutUs";
                }}
              >
                Read More
              </Button>
            </Col>
          </Row>
        </div>
        {/* </Slide> */}
      </div>

      <div className="w-100 mt-4">
        {/* <Slide right> */}
        <Image
          src={public_img_path + "our_business.jpg"}
          fluid
          alt="our-busineess img"
          style={{ cursor: "pointer" }}
        />
        {/* </Slide> */}
      </div>

      <div className="w-100 mt-4">
        {/* <Slide left> */}
        <div className="container">
          <Row>
            <Col md={12} className="noto-sans-sc bold sectionTitle">
              OUR PRODUCTS
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
                    <Card
                      key={index}
                      onClick={() => {
                        window.location = "/our-businesses";
                      }}
                    >
                      <Card.Img src={prod.img} alt={prod.alt} />
                    </Card>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </div>
        {/* </Slide> */}
      </div>

      <div className="w-100 mt-4">
        {/* <Slide right> */}
        <div className="container">
          <Row>
            <Col md={12} className="noto-sans-sc bold sectionTitle">
              OUR SERVICES
            </Col>
          </Row>
          <Row>
            <Col md={12} className="sectionBody">
              <Row>
                {Services.map((prod, index) => {
                  return (
                    <Col md={4}>
                      <Card key={index}>
                        <Card.Img src={prod.img} alt={prod.alt} />
                        <Card.ImgOverlay>
                          {prod.title.toUpperCase()}
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
        {/* </Slide> */}
      </div>
    </div>
  );
};

export default HomePage;
