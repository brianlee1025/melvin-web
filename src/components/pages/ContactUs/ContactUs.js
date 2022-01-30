import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const ContactUs = () => {
  return (
    <div className="noto-sans-sc">
      <Image
        className="mb-3"
        src={public_img_path + "business_opp_1.jpg"}
        fluid
        alt="Contact Us"
      />
      <div align="left" className="container">
        <Row>
          <Col md={12} className="mt-3 sectionTitle bold">
            ADDRESS
          </Col>
        </Row>
        <Row>
          <Col md={12} className="bold black">
            <div className="contentPart">
              <p>Headquarter Office</p>
              <p>
                68, Jalan 2/10b, Taman Industri Spring Crest Batu Caves, 68100
                Batu Caves, Wilayah Persekutuan Kuala Lumpur.
              </p>
            </div>
            <div className="contentPart">
              <p>Johor Office</p>
              <p>No.29, Jalan Intan 2/1, Taman Intan 86000, Kluang, Johor.</p>
            </div>
            <div className="contentPart">
              <p>Melaka Office</p>
              <p>
                No.68, Jalan Mutiara Melaka 2, Taman Mutiara Melaka, 75350 Batu
                Berendam, Melaka.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="sectionTitle bold">
            HOTLINE
          </Col>
        </Row>
        <Row>
          <Col md={12} className="bold black">
            +(60)17-7217996
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-4 sectionTitle bold">
            EMAIL
          </Col>
        </Row>
        <Row>
          <Col md={12} className="bold black">
            info@mmt.asia
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;
