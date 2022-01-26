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
            <p className="mb-0">
              <GiRotaryPhone /> +6017-7217996
            </p>
            <p>
              <MdEmail /> info@mmt@asia
            </p>
          </Col>
          <Col md={3}>
            <p className="main-title">
              <b>PRODUCTS</b>
            </p>
            <p>
              <ul>
                {Products.map((item, index) => {
                  return (
                    <li key={index} style={{ cursor: "pointer" }}>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </p>
          </Col>
          <Col md={3}>
            <p className="main-title">
              <b>SERVICES</b>
            </p>
            <p>
              <ul>
                {Services.map((item, index) => {
                  return (
                    <li key={index} style={{ cursor: "pointer" }}>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </p>
          </Col>
          <Col md={3}>
            <p className="main-title">
              <b>ADDRESS</b>
            </p>
            <p className="mb-0">
              <b>HEADQUATER OFFICE</b>
            </p>
            <p>
              68, Jalan 2/10b, Taman Industri Spring Crest Batu Caves, 68100
              Batu Caves, Wilayah Persekutuan Kuala Lumpur
            </p>
            <p className="mb-0">
              <b>JOHOR OFFICE</b>
            </p>
            <p>No.29, Jalan Intan 2/1, Taman Intan 86000, Kluang, Johor</p>
            <p className="mb-0">
              <b>MELAKA OFFICE</b>
            </p>
            <p>
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
