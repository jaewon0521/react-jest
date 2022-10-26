import React, { useState } from "react";

const SummaryForm = () => {
  const [agreeChecked, setAgreeChecked] = useState(false);

  const handleAgreeToggle = () => {
    setAgreeChecked(!agreeChecked);
  };

  return (
    <article>
      <div>
        <input type="checkbox" value={agreeChecked} onChange={handleAgreeToggle} />
      </div>
    </article>
  );
};

export default SummaryForm;
