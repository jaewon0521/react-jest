import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B( [A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [checked, setChecked] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: checked ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checked}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={() => setChecked(!checked)} />
    </div>
  );
}

export default App;
