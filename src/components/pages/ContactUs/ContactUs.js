import React, { useState } from "react";
import "./ContactUs.css";
import { Row, Col, Image, Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const public_img_path = process.env.PUBLIC_URL + "/img/";

const ContactUs = () => {
  const [loadingState, setLoadingState] = useState(false);

  const submit = (e) => {
    setLoadingState(true);
    e.preventDefault();
    const elements = e.target.elements;
    const data = {
      name: elements.Name.value,
      email: elements.Email.value,
      phoneNumber: elements.PhoneNo.value,
      message: elements.Message.value,
    };

    emailjs
      .send(
        "service_wgxmps5",
        "template_zi18fsq",
        data,
        "user_1IVjxuLlr9OEFwH46in1r"
      )
      .then(
        (result) => {
          setLoadingState(false);
          window.alert(
            "Thank you for your enquiry. We will get back to you as soon as possible."
          );
        },
        (error) => {
          setLoadingState(false);
          window.alert("Something went wrong. Please try again later.");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
        <Row>
          <Col md={12} className="mt-4 sectionTitle bold">
            ENQUIRY FORM
          </Col>
        </Row>
        <form onSubmit={submit}>
          <Row className="mt-2">
            <Col md={2} className="bold black mb-2">
              Name
            </Col>
            <Col md={10} className="bold black">
              <input
                type="text"
                className="inputBox"
                name="Name"
                required
              ></input>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={2} className="bold black mb-2">
              Email Address
            </Col>
            <Col md={10} className="bold black">
              <input
                type="text"
                className="inputBox"
                name="Email"
                required
              ></input>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={2} className="bold black mb-2">
              Phone Number
            </Col>
            <Col md={10} className="bold black">
              <input
                type="text"
                className="inputBox"
                name="PhoneNo"
                required
              ></input>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={2} className="bold black mb-2">
              Message
            </Col>
            <Col md={10} className="bold black">
              <textarea
                className="inputBox"
                cols="40"
                rows="5"
                name="Message"
                required
              ></textarea>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12} className="bold">
              {!loadingState ? (
                <button type="submit" className="submitButton">
                  Submit
                </button>
              ) : (
                <button className="submitButton" disabled>
                  <Spinner animation="border" />
                </button>
              )}
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
