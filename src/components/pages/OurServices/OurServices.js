import React, { useState, useEffect } from "react";
import "./OurServices.css";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const OurServices = (props) => {
  const [imageLoaded, setImageLoaded] = useState(0);
  let { service } = useParams();

  useEffect(() => {
    if (typeof service !== "undefined" && imageLoaded === 4) {
      let id =
        service === "air-freight"
          ? "air_freight"
          : service === "sea-freight"
          ? "sea_freight"
          : service === "customs"
          ? "customs"
          : service === "inland-transportation"
          ? "inland_transportation"
          : "";
      scrollToService(id);
    }
  }, [service, imageLoaded]);

  const scrollToService = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="ourServicesContainer noto-sans-sc">
      <div className="top-background">
        <div align="center" className="container pt-4 pb-5">
          <Row>
            <Col md={12} className="bold sectionTitle">
              Making logistics services <br />
              simple
            </Col>
          </Row>

          <Row>
            <Col md={12} className="sectionBody pt-4">
              Our logistics services make your logistics hassle-free. We’ve got
              you covered – moving your <br />
              cargo from warehouse to warehouse or door to door.
            </Col>
          </Row>

          <Row>
            <Col md={12} className="bold sectionTitle pt-4">
              Our Services
            </Col>
          </Row>

          <Row>
            <Col md={12} className="sectionBody pt-1 servicesCol">
              <span
                onClick={() => {
                  scrollToService("air_freight");
                  window.history.replaceState(
                    null,
                    "Our Services",
                    "/our-businesses/our-services/air-freight"
                  );
                }}
              >
                Air Freight
              </span>{" "}
              <span
                onClick={() => {
                  scrollToService("sea_freight");
                  window.history.replaceState(
                    null,
                    "Our Services",
                    "/our-businesses/our-services/sea-freight"
                  );
                }}
              >
                Sea Freight
              </span>{" "}
              <span
                onClick={() => {
                  scrollToService("customs");
                  window.history.replaceState(
                    null,
                    "Our Services",
                    "/our-businesses/our-services/customs"
                  );
                }}
              >
                Customs
              </span>{" "}
              <span
                onClick={() => {
                  scrollToService("inland_transportation");
                  window.history.replaceState(
                    null,
                    "Our Services",
                    "/our-businesses/our-services/inland-transportation"
                  );
                }}
              >
                Inland Transportation
              </span>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container pt-4 pb-5">
        <Row>
          <Col md={12} className="pb-3">
            <div align="center" className="bold sectionTitle">
              Move your cargo across all modes
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="pt-4">
            <Card id="air_freight">
              <Card.Img
                className="serviceImage"
                variant="top"
                src={public_img_path + "services/air_freight.jpg"}
                onLoad={() => {
                  setImageLoaded(imageLoaded + 1);
                }}
              />
              <Card.Body>
                <Card.Title className="serviceTitle bold text-center pb-2">
                  Air Freight
                </Card.Title>
                <Card.Text className="serviceBody">
                  With our express air freight service, also known as "next
                  flight out" (NFO), your time-critical freight will be picked
                  up at any time and will be transported on the next available
                  scheduled flight.
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Personal Account Manager offering
                  24/7 support and global coverage.
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Global access and relationships with
                  airlines.
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Airport-to-airport, door-to-door.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="pt-4">
            <Card id="sea_freight">
              <Card.Img
                className="serviceImage"
                variant="top"
                src={public_img_path + "services/sea_freight.jpg"}
                onLoad={() => {
                  setImageLoaded(imageLoaded + 1);
                }}
              />
              <Card.Body>
                <Card.Title className="serviceTitle bold text-center pb-2">
                  Sea Freight
                </Card.Title>
                <Card.Text className="serviceBody">
                  With shipping services from over 300 ports, MMT Trading
                  enables small and medium-sized businesses to grow. We not only
                  connect your business globally, but also simplify your
                  end-to-end logistics in the process.
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Global network
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Shipping expertise
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;End-to-end services
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="pt-4">
            <Card id="customs">
              <Card.Img
                className="serviceImage"
                variant="top"
                src={public_img_path + "services/customs.jpg"}
                onLoad={() => {
                  setImageLoaded(imageLoaded + 1);
                }}
              />
              <Card.Body>
                <Card.Title className="serviceTitle bold text-center pb-2">
                  Customs{" "}
                </Card.Title>
                <Card.Text className="serviceBody">
                  Our Customs Clearance Services facilitate your freight
                  assuring you an effortless and secure customs clearance
                  process. Whether you are looking for import or export customs
                  clearance, our experts can guide you through the process.
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Local solutions
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Risk management
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Efficient process
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="pt-4">
            <Card id="inland_transportation">
              <Card.Img
                className="serviceImage"
                variant="top"
                src={public_img_path + "services/inland_transportation.jpg"}
                onLoad={() => {
                  setImageLoaded(imageLoaded + 1);
                }}
              />
              <Card.Body>
                <Card.Title className="serviceTitle bold text-center pb-2">
                  Inland Transportation
                </Card.Title>
                <Card.Text className="serviceBody">
                  Inland transportation is a key partner to ocean freight and
                  with MMT Trading, you get access to a range of quality
                  intermodal services – whether truck, rail or barge. Find the
                  right transport mode for your cargo and let us handle the
                  rest.
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Seamless transparency
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Single point of contact
                  <br />
                  <br />
                  <AiOutlineCheck /> &nbsp;Reliable service
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurServices;
