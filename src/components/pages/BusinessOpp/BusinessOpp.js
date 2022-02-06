import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./BusinessOpp.css";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const BusinessOpp = () => {
  const { innerWidth: width } = window;

  return (
    <div className="businessOpp noto-sans-sc">
      {width > 768 ? (
        <div>
          <Image
            className="mb-3"
            src={public_img_path + "business_opp_1.jpg"}
            fluid
            alt="Business Opportunity"
          />
          <div align="center" className="container">
            <Row>
              <Col md={12} className="mt-4">
                <div className="contentPart black">
                  <p>
                    We're interested in hearing from companies that would like
                    to become an agent or distributor
                  </p>
                  <p>
                    for MMT market-leading food and packaging products,
                    innovative cleaning solutions and services.
                  </p>
                </div>
                <div className="contentPart black">
                  <p>
                    We are continuously seeking qualified, commission-based
                    agents or distributors,
                  </p>
                  <p>
                    who are eager and passionate about representing MMT and
                    extend our global reach and sales worldwide.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <Image
            className="mt-4"
            src={public_img_path + "business_opp_2.jpg"}
            fluid
            alt="Business Opportunity"
          />
          <div align="left" className="container mt-5">
            <Row>
              <Col md={12}>
                <div className="contentPart black">
                  <p>
                    We value our agents and distributors as an integral element
                    of MMT's success. They are our eyes and ears at a local
                    level,
                  </p>
                  <p>
                    working with our end customers to support them in their
                    development projects and production plant setups.
                  </p>
                  <p>
                    Specifically, we see potential to do business with people or
                    companies who will have:
                  </p>
                </div>

                <ul>
                  <li>
                    Enthusiasm for the MMT concept and a strong focus to be
                    involved in developing the awareness and local presence of
                    MMT by promoting and distributing its solutions and services
                    across the food industry in your selected territory within
                    the countries.
                  </li>
                  <li>
                    Extensive industry experience in sales of processing systems
                    and after-sales services to a variety of companies.
                  </li>
                  <li>
                    An in-depth understanding of local/territory/global trends
                    and markets shaping the future demand and supply of our
                    products to the markets and affecting the broader operating
                    environment of the industry.
                  </li>
                  <li>
                    Ability to effectively engage with customers and new
                    businesses who are keen on our business.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="sectionTitle bold">
                WHAT CAN WE OFFER YOU
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-3">
                <ul>
                  <li>
                    Advanced, market leading food and packaging products,
                    cleaning solutions with competitive pricing
                  </li>
                  <li>
                    Marketing and sales support to achieve a good market share
                    and excellent economic results.
                  </li>
                  <li>Training of your sales force.</li>
                  <li>
                    Technical and commercial collaboration to support the needs
                    of customers.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="sectionTitle bold">
                WHAT SUPPORT WE GIVE TO OUR CUSTOMER:
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-3 black">
                <div>
                  <p>
                    Sales analysis, assist customer in understanding consumers
                    culture and improve in sales.
                  </p>
                  <p>
                    Technical analysis, providing support in hardware technical
                    issues.
                  </p>
                </div>
                <p>
                  We provide our customers in hardware facilities to keep their
                  business in sustainable growth.
                </p>
              </Col>
            </Row>
          </div>
          <div className="container">
            <Image
              className="mt-4 mb-4"
              src={public_img_path + "business_opp_3.jpg"}
              fluid
              alt="Business Opportunity"
            />
          </div>
        </div>
      ) : (
        <div className="mobileVersion">
          <Image
            className="mb-3"
            src={public_img_path + "business_opp_1.jpg"}
            fluid
            alt="Business Opportunity"
          />
          <div align="center" className="container">
            <Row>
              <Col md={12} className="mt-1">
                <div className="black">
                  <p>
                    We're interested in hearing from companies that would like
                    to become an agent or distributor for MMT market-leading
                    food and packaging products, innovative cleaning solutions
                    and services.
                  </p>
                </div>
                <div className="black">
                  <p>
                    We are continuously seeking qualified, commission-based
                    agents or distributors, who are eager and passionate about
                    representing MMT and extend our global reach and sales
                    worldwide.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <Image
            className="mt-1"
            src={public_img_path + "business_opp_2.jpg"}
            fluid
            alt="Business Opportunity"
          />
          <div align="left" className="container mt-4">
            <Row>
              <Col md={12}>
                <div className="black">
                  <p>
                    We value our agents and distributors as an integral element
                    of MMT's success. They are our eyes and ears at a local
                    level, working with our end customers to support them in
                    their development projects and production plant setups.{" "}
                    <br />
                    Specifically, we see potential to do business with people or
                    companies who will have:
                  </p>
                </div>

                <ul>
                  <li>
                    Enthusiasm for the MMT concept and a strong focus to be
                    involved in developing the awareness and local presence of
                    MMT by promoting and distributing its solutions and services
                    across the food industry in your selected territory within
                    the countries.
                  </li>
                  <li>
                    Extensive industry experience in sales of processing systems
                    and after-sales services to a variety of companies.
                  </li>
                  <li>
                    An in-depth understanding of local/territory/global trends
                    and markets shaping the future demand and supply of our
                    products to the markets and affecting the broader operating
                    environment of the industry.
                  </li>
                  <li>
                    Ability to effectively engage with customers and new
                    businesses who are keen on our business.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="sectionTitle">
                WHAT CAN WE OFFER YOU
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ul>
                  <li>
                    Advanced, market leading food and packaging products,
                    cleaning solutions with competitive pricing
                  </li>
                  <li>
                    Marketing and sales support to achieve a good market share
                    and excellent economic results.
                  </li>
                  <li>Training of your sales force.</li>
                  <li>
                    Technical and commercial collaboration to support the needs
                    of customers.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="sectionTitle">
                WHAT SUPPORT WE GIVE TO OUR CUSTOMER:
              </Col>
            </Row>
            <Row>
              <Col md={12} className="black">
                <div>
                  <p>
                    Sales analysis, assist customer in understanding consumers
                    culture and improve in sales. Technical analysis, providing
                    support in hardware technical issues.
                  </p>
                  <p>
                    We provide our customers in hardware facilities to keep
                    their business in sustainable growth.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="container">
            <Image
              className="mt-4 mb-3"
              src={public_img_path + "business_opp_3.jpg"}
              fluid
              alt="Business Opportunity"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessOpp;
