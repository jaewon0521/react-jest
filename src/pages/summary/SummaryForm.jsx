import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

const SummaryForm = () => {
  const [agreeChecked, setAgreeChecked] = useState(false);

  const handleAgreeToggle = (e) => {
    setAgreeChecked(e.target.checked);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check type="checkbox" checked={agreeChecked} onChange={handleAgreeToggle} label={checkboxLabel} />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit" disabled={!agreeChecked}>
          Confirm order
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SummaryForm;
