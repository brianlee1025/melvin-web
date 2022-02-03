import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Products } from "../../enum/Products";
import { Services } from "../../enum/Services";
import "./Footer.css";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const Footer = () => {
  return (
    <div className="footer mt-5 pb-3">
      <div className="container">
        <Row className="pt-4">
          <Col md={3}>
            <p>
              <Image
                src={public_img_path + "logo_white_cropped.png"}
                className="d-inline-block align-top"
                alt="MMT Trading"
              />
            </p>
            <p className="mb-0 bottom-content">
              <GiRotaryPhone /> +6017-7217996
            </p>
            <p className="bottom-content">
              <MdEmail /> info@mmt.asia
            </p>
          </Col>
          <Col md={3}>
            <p className="noto-sans-sc bold main-title">PRODUCTS</p>
            <ul className="footerUl bottom-content">
              {Products.map((item, index) => {
                return (
                  <li
                    className="footerLi"
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location = "/our-businesses";
                    }}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={3}>
            <p className="noto-sans-sc bold main-title">SERVICES</p>
            <ul className="footerUl bottom-content">
              {Services.map((item, index) => {
                return (
                  <li className="footerLi" key={index}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={3}>
            <p className="noto-sans-sc bold main-title">ADDRESS</p>
            <p className="noto-sans-sc bold mb-0 bottom-content">
              HEADQUATER OFFICE
            </p>
            <p className="bottom-content">
              68, Jalan 2/10b, Taman Industri Spring Crest Batu Caves, 68100
              Batu Caves, Wilayah Persekutuan Kuala Lumpur
            </p>
            <p className="noto-sans-sc bold mb-0 bottom-content">
              JOHOR OFFICE
            </p>
            <p className="bottom-content">
              No.29, Jalan Intan 2/1, Taman Intan 86000, Kluang, Johor
            </p>
            <p className="noto-sans-sc bold mb-0 bottom-content">
              MELAKA OFFICE
            </p>
            <p className="bottom-content">
              No.68, Jalan Mutiara Melaka 2, Taman Mutiara Melaka, 75350 Batu
              Berendam, Melaka
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
