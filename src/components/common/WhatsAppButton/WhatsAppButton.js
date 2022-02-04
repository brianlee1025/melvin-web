import { React } from "react";
import "./WhatsAppButton.css";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const sendWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=+60177217996");
  };

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
        <Button
          className="whatsapp-button p-2 rounded-circle"
          variant="success"
          size="lg"
          onClick={sendWhatsapp}
        >
          <FaWhatsapp className="whatsapp-icon" />
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default WhatsAppButton;
