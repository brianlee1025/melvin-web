import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FiArrowUp } from "react-icons/fi";
import "./GoTopButton.css";

const GoTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const buttonController = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonController);
    return () => {
      window.removeEventListener("scroll", buttonController);
    };
  }, []);

  return (
    <>
      {showButton && (
        <Button
          className="goToTopButton"
          variant="secondary"
          onClick={scrollToTop}
        >
          <FiArrowUp />
        </Button>
      )}
    </>
  );
};

export default GoTopButton;
