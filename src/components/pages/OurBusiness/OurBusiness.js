import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  CLEANING_PRODUCTS,
  DIM_SUM,
  MYLACTA,
  PACKAGING_PRODUCTS,
  PAU_SEDAP,
  RAMLY,
} from "../../enum/Products";
import "./OurBusiness.css";

const OurBusiness = () => {
  return (
    <div align="center" className="mt-3 container ourBusiness">
      <div className="mb-3">
        <span className="noto-sans-sc bold sectionTitle">PAU SEDAP</span>
        <Container>
          <Row className="justify-content-center">
            {PAU_SEDAP.map((item, index) => {
              return (
                <Col className="productCol" sm={12} md={6} lg={4} key={index}>
                  <Card>
                    <Card.Img src={item.img} alt={item.alt} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="mb-3">
        <span className="noto-sans-sc bold sectionTitle">DUMPLING</span>
        <Container>
          <Row className="justify-content-center">
            {DIM_SUM.map((item, index) => {
              return (
                <Col className="productCol" sm={12} md={6} lg={4} key={index}>
                  <Card>
                    <Card.Img src={item.img} alt={item.alt} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="mb-3">
        <span className="noto-sans-sc bold sectionTitle">RAMLY BURGER</span>
        <Container>
          <Row className="justify-content-center">
            {RAMLY.map((item, index) => {
              return (
                <Col className="productCol" sm={12} md={6} lg={6} key={index}>
                  <Card>
                    <Card.Img src={item.img} alt={item.alt} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="mb-3">
        <span className="noto-sans-sc bold sectionTitle">MYLACTA</span>
        <Container>
          <Row className="justify-content-center">
            {MYLACTA.map((item, index) => {
              return (
                <Col className="productCol" sm={12} md={12} lg={12} key={index}>
                  <Card>
                    <Card.Img src={item.img} alt={item.alt} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="mb-3">
        <span className="noto-sans-sc bold sectionTitle">
          Cleaning Products
        </span>
        <Container>
          <Row className="justify-content-center">
            {Array(39)
              .fill()
              .map((item, index) => {
                return (
                  <Col className="productCol" sm={12} md={6} lg={4} key={index}>
                    <Card>
                      <Card.Img
                        src={CLEANING_PRODUCTS.img + (index + 1) + ".jpg"}
                        alt={CLEANING_PRODUCTS.alt}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>

      <div className="mb-3">
        <span className="noto-sans-sc bold sectionTitle">
          Packaging Products
        </span>
        <Container>
          <Row className="justify-content-center">
            {Array(12)
              .fill()
              .map((item, index) => {
                return (
                  <Col className="productCol" sm={12} md={6} lg={4} key={index}>
                    <Card>
                      <Card.Img
                        src={PACKAGING_PRODUCTS.img + (index + 1) + ".jpg"}
                        alt={PACKAGING_PRODUCTS.alt}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurBusiness;
