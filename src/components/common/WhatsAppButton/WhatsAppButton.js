import { React } from "react";
import "./WhatsAppButton.css";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <>
      <OverlayTrigger
        key="left"
        placement="left"
        overlay={
          <Tooltip>
            <strong>WhatsApp Us!</strong>
          </Tooltip>
        }
      >
        <Button className="whatsapp-button" variant="success">
          <FaWhatsapp className="whatsapp-icon" />
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default WhatsAppButton;
