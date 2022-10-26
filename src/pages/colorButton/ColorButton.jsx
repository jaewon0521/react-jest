import React, { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

const ColorButton = () => {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [checked, setChecked] = useState(false);

  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div>
      <button
        style={{ backgroundColor: checked ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checked}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input type="checkbox" onChange={() => setChecked(!checked)} />
    </div>
  );
};

export default ColorButton;
