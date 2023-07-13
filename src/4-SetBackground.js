// Create a select dropdown that updates the background color of the page when a new color is selected.

import { useState } from "react";

export const ChangeBackground = () => {
  const [color, setColor] = useState([]);

  const handleColor = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
  };

  return (
    <div
      style={{
        padding: "80px",
        border: "1px solid grey",
        backgroundColor: color
      }}
    >
      <select onChange={handleColor}>
        <option>white</option>
        <option value="green">green</option>
        <option value="red">red</option>
        <option>pink</option>
        <option>orange</option>
      </select>
    </div>
  );
};
