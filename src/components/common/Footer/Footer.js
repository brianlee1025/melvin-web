import React from "react";
import { Col, Row } from "react-bootstrap";
import { Products } from "../../enum/Products";
import "./Footer.css";
import { FaMapPin, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row className="pt-4">
          <Col md={4}>
            <p>About Us</p>
            <p style={{ textAlign: "justify" }}>
              Guaranteed to be fresh and of high quality, our products have
              allowed us to gain trust and confidence from our customers while
              building a good reputation for ourselves in this industry. We
              pride ourselves by maintaining products and services of top
              quality while continuously offering the best products sourced from
              every continents of the world.
            </p>
          </Col>
          <Col md={4} className="productCol">
            <p>Our Products</p>
            <p>
              <ul>
                {Products.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href="#">{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </p>
          </Col>
          <Col md={4}>
            <p>Contact Info</p>
            <p className="mb-0">
              Address&nbsp;
              <FaMapPin />
            </p>
            <p>
              No. 123 Jalan MMT Seksyen 888, 46000 Petaling Jaya, Selangor,
              Malaysia.
            </p>
            <p className="mb-0">
              Contact Number&nbsp;
              <FaPhoneAlt />
            </p>
            <p>+6012-1234567</p>
            <p className="mb-0">
              E-Mail&nbsp;
              <FaMailBulk />
            </p>
            <p>mmt-trading@gmail.com</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
