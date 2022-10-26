import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SummaryForm = () => {
  const [agreeChecked, setAgreeChecked] = useState(false);

  const handleAgreeToggle = (e) => {
    setAgreeChecked(e.target.checked);
  };

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}> Terms and Conditions</span>
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
