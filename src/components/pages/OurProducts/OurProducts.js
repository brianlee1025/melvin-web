import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Spinner,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  CLEANING_PRODUCTS,
  DIM_SUM,
  MYLACTA,
  PACKAGING_PRODUCTS,
  PAU_SEDAP,
  RAMLY,
} from "../../enum/Products";
import "./OurProducts.css";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const OurProducts = () => {
  const [imageLoaded, setImageLoaded] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  const defaultOverlayTriggerData = [
    {
      id: "pau-sedap",
      message: "Pau Sedap",
      show: true,
      onclick: () => {
        scrollToProduct("pau-sedap");
        replaceUrl("pau-sedap");
      },
    },
    {
      id: "ramly",
      message: "Ramly",
      show: false,
      onclick: () => {
        scrollToProduct("ramly");
        replaceUrl("ramly");
      },
    },
    {
      id: "my-lacta",
      message: "My Lacta",
      show: false,
      onclick: () => {
        scrollToProduct("my-lacta");
        replaceUrl("my-lacta");
      },
    },
    {
      id: "cleaning-products",
      message: "Cleaning Products",
      show: false,
      onclick: () => {
        scrollToProduct("cleaning-products");
        replaceUrl("cleaning-products");
      },
    },
    {
      id: "packaging-products",
      message: "Packaging Products",
      show: false,
      onclick: () => {
        scrollToProduct("packaging-products");
        replaceUrl("packaging-products");
      },
    },
  ];
  const [overlayTriggerData, setOverlayTriggerData] = useState(
    defaultOverlayTriggerData
  );
  let { product } = useParams();

  useEffect(() => {
    if (showLoading) {
      setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    }
  }, [showLoading]);

  useEffect(() => {
    if (product && imageLoaded === 79) {
      scrollToProduct(product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, imageLoaded]);

  const scrollToProduct = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    const index = overlayTriggerData.findIndex((item) => item.id === id);
    if (index !== -1) {
      let cloneOverlayTriggerData = [
        ...overlayTriggerData.map((x) => {
          return { ...x, show: false };
        }),
      ];
      cloneOverlayTriggerData[index].show = true;
      setOverlayTriggerData(cloneOverlayTriggerData);
    }
  };

  const replaceUrl = (product) => {
    window.history.replaceState(
      null,
      "Our Products",
      "/our-businesses/our-products/" + product
    );
  };

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

      {MiniNavBar({ overlayTriggerData })}
    </div>
  );
};

function MiniNavBar(props) {
  const [showOverlay, setShowOverlay] = useState(true);
  const { overlayTriggerData } = props;

  return (
    <div>
      <OverlayTrigger
        key="right"
        placement="right"
        overlay={
          <Tooltip>
            <strong>Navigate via here!</strong>
          </Tooltip>
        }
      >
        <Button
          className="navBarButton p-2 rounded-circle"
          size="lg"
          onClick={() => {
            setShowOverlay(!showOverlay);
          }}
        >
          {showOverlay ? <AiOutlineUp /> : <AiOutlineDown />}
        </Button>
      </OverlayTrigger>

      <div className={`miniNavBar ${showOverlay ? "fadeIn" : "fadeOut"}`}>
        {overlayTriggerData &&
          overlayTriggerData.map((item, index) => {
            return (
              <OverlayTrigger
                placement="right"
                overlay={renderTooltip(item, index)}
                show={showOverlay}
                delay={{ show: 1000, hide: 500 }}
                key={index}
                trigger={["hover", "focus"]}
              >
                <div></div>
              </OverlayTrigger>
            );
          })}
      </div>
    </div>
  );
}

const renderTooltip = (data, index) => (
  <Tooltip
    className="button-tooltip"
    onClick={() => {
      data.onclick(index);
    }}
  >
    {data.show ? (
      <b style={{ color: "#234ea2" }}>{data.message}</b>
    ) : (
      data.message
    )}
  </Tooltip>
);

export default OurProducts;
