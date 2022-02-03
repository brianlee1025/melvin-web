import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Chrono } from "react-chrono";
import "./AboutUs.css";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const AboutUs = () => {
  const items = [
    {
      title: "2015 Incorporated",
      // cardTitle: "Dunkirk",
      // url: "http://www.history.com",
      // cardSubtitle:
      // "Established in 2015 as MMT Trading. Main distributors in HALAL Market.",
      // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg"
      //   }
      // }
    },
    {
      title: "2018",
      // cardTitle: "Dunkirk",
      // url: "http://www.history.com",
      // cardSubtitle: "Bringing cleaning innovations and solutions.",
      // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg"
      //   }
      // }
    },
    {
      title: "2020",
      // cardTitle: "Dunkirk",
      // url: "http://www.history.com",
      // cardSubtitle:
      // "Expanded into freight services industry. Provide complete ranges of services in freight forwarding, warhousing, distribution and customs brokerage.",
      // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg"
      //   }
      // }
    },
    {
      title: " ",
      // cardTitle: "Dunkirk",
      // url: "http://www.history.com",
      // cardSubtitle: "To be continued..",
      // cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     url: "http://someurl/image.jpg"
      //   }
      // }
    },
  ];

  return (
    <div className="noto-sans-sc bold aboutUs">
      <Image src={public_img_path + "about_us_1.jpg"} fluid alt="About Us" />

      <div align="center" className="container">
        <Row>
          <Col md={12} className="mt-4 sectionTitle">
            FROZEN FOOD SPECIALIST
          </Col>
        </Row>
        <Row>
          <Col md={12} className="aboutUsSectionBody mt-1">
            <div className="contentPart">
              <p>
                Since its inception in 2015, MMT Trading has been established as
                frozen food specialist.
              </p>
              <p>
                We are local provider of frozen food and mainly targeting in
                halal market over the states.
              </p>
            </div>
            <div className="contentPart">
              <p>
                Guaranteed to be fresh and of high quality, our products have
                allowed us to gain trust and confidence
              </p>
              <p>
                from our customers while building a good reputation for
                ourselves in this industry.
              </p>
            </div>

            <div className="contentPart">
              <p>
                We pride ourselves by maintaining products and services of top
                quality while continuously offering
              </p>
              <p>
                the best products sourced from every continents of the world. At
                MMT, we do everything to make it easy for you.
              </p>
              <p>
                We are a company with the buying power to offer our customer
                consistently great
              </p>
              <p>quality and prices across a wide range of products.</p>
            </div>
          </Col>
        </Row>
      </div>
      <Image src={public_img_path + "about_us_2.jpg"} fluid alt="About Us" />
      <div align="center" className="container">
        <Row>
          <Col md={12} className="mt-4 sectionTitle">
            CLEANING SOLUTION
          </Col>
        </Row>
        <Row>
          <Col md={12} className="aboutUsSectionBody mt-1">
            <div className="contentPart">
              <p>
                In 2018, MMT has been bringing cleaning innovations and
                solutions to Malaysia.
              </p>
              <p>
                We offer the best range of cleaning & hygiene solutions to
                various industries including Hospitality,
              </p>
              <p>
                Cleaning Company, Banking, Retail, Food & Beverage,
                Manufacturing, Building, Shopping Mall, Cinema, Hotel, Resort
              </p>
              <p>
                and Government Agencies for both Domestic and International
                Market.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Image src={public_img_path + "about_us_3.jpg"} fluid alt="About Us" />
      <div align="center" className="container">
        <Row>
          <Col md={12} className="mt-4 sectionTitle">
            FREIGHT SERVICES
          </Col>
        </Row>
        <Row>
          <Col md={12} className="aboutUsSectionBody mt-1">
            <div className="contentPart">
              <p>
                In 2020, MMT has expanded its businesses into freight services.
                We provide international
              </p>
              <p>
                freight forwarding, ocean freight, air freight, and sea freight.
                Air transport, customs clearance, express delivery
              </p>
              <p>
                and other services, as well as container freight stations
                established around the world, deal with the receipt,
              </p>
              <p>
                transfer, assembly and disassembly of imported and exported
                goods.
              </p>
            </div>
            <div className="contentPart">
              <p>
                We have set up strongholds in Asia, Africa, Australia, Canada,
                Europe, India , Middle East and USA
              </p>
              <p>
                to deal with customs clearance of import and export shipments.
                We also one of the major transportation service
              </p>
              <p>providers in Malaysia for SEA & AIR freight.</p>
            </div>
          </Col>
        </Row>
      </div>
      <Image src={public_img_path + "about_us_4.jpg"} fluid alt="About Us" />
      <Row>
        <Col sm={12} md={6} lg={6} className="mt-4 sectionTitle">
          <div align="center">MILESTONE</div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mt-1 mb-3">
          <div style={{ width: "auto", height: "auto" }}>
            <Chrono
              items={items}
              mode="VERTICAL"
              hideControls={true}
              theme={{ secondary: "transparent" }}
            >
              <div className="noto-sans-sc bold">
                Established in 2015 as MMT Trading.
                <br /> Main distributors in HALAL Market.
              </div>
              <div className="noto-sans-sc bold">
                <p>Bringing cleaning innovations and solutions.</p>
              </div>
              <div className="noto-sans-sc bold">
                Expanded into freight services industry.
                <br />
                Provide complete ranges of services in freight forwarding,
                warhousing, distribution and customs brokerage.
              </div>
              <div className="noto-sans-sc bold">
                <p>To be continued..</p>
              </div>
            </Chrono>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
