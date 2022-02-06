import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
  const [imageLoaded, setImageLoaded] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  let { product } = useParams();

  useEffect(() => {
    if (showLoading) {
      setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    }
  }, [showLoading]);

  useEffect(() => {
    if (product && imageLoaded === 80) {
      const element = document.getElementById(product);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [product, imageLoaded]);

  return (
    <div align="center" className="mt-3 container ourBusiness">
      <div className="mb-3" id="pau-sedap">
        <span className="noto-sans-sc bold sectionTitle">PAU SEDAP</span>
        <Container>
          <Row className="justify-content-center">
            {PAU_SEDAP.map((item, index) => {
              return (
                <Col className="productCol" sm={6} md={6} lg={4} key={index}>
                  <Card>
                    <Card.Img
                      src={item.img}
                      alt={item.alt}
                      onLoad={() => {
                        setImageLoaded(imageLoaded + 1);
                      }}
                    />
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
                <Col className="productCol" sm={6} md={6} lg={4} key={index}>
                  <Card>
                    <Card.Img
                      src={item.img}
                      alt={item.alt}
                      onLoad={() => {
                        setImageLoaded(imageLoaded + 1);
                      }}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="mb-3" id="ramly">
        <span className="noto-sans-sc bold sectionTitle">RAMLY BURGER</span>
        <Container>
          <Row className="justify-content-center">
            {RAMLY.map((item, index) => {
              return (
                <Col className="productCol" sm={6} md={6} lg={6} key={index}>
                  <Card>
                    <Card.Img
                      src={item.img}
                      alt={item.alt}
                      onLoad={() => {
                        setImageLoaded(imageLoaded + 1);
                      }}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="mb-3" id="my-lacta">
        <span className="noto-sans-sc bold sectionTitle">MYLACTA</span>
        <Container>
          <Row className="justify-content-center">
            {MYLACTA.map((item, index) => {
              return (
                <Col className="productCol" sm={12} md={12} lg={12} key={index}>
                  <Card>
                    <Card.Img
                      src={item.img}
                      alt={item.alt}
                      onLoad={() => {
                        setImageLoaded(imageLoaded + 1);
                      }}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="mb-3" id="cleaning-products">
        <span className="noto-sans-sc bold sectionTitle">
          Cleaning Products
        </span>
        <Container>
          <Row className="justify-content-center">
            {Array(39)
              .fill()
              .map((item, index) => {
                return (
                  <Col className="productCol" sm={6} md={6} lg={4} key={index}>
                    <Card>
                      <Card.Img
                        src={CLEANING_PRODUCTS.img + (index + 1) + ".jpg"}
                        alt={CLEANING_PRODUCTS.alt}
                        onLoad={() => {
                          setImageLoaded(imageLoaded + 1);
                        }}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>

      <div className="mb-3" id="packaging-products">
        <span className="noto-sans-sc bold sectionTitle">
          Packaging Products
        </span>
        <Container>
          <Row className="justify-content-center">
            {Array(12)
              .fill()
              .map((item, index) => {
                return (
                  <Col className="productCol" sm={6} md={6} lg={4} key={index}>
                    <Card>
                      <Card.Img
                        src={PACKAGING_PRODUCTS.img + (index + 1) + ".jpg"}
                        alt={PACKAGING_PRODUCTS.alt}
                        onLoad={() => {
                          setImageLoaded(imageLoaded + 1);
                        }}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>

      {showLoading && (
        <div className="full-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default OurBusiness;
