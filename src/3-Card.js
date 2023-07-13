import { useState } from "react";

// Create a slider input in React which will set the border radius of a card on a change in the value of the range.
export const Slider = () => {
  const [borderRadius, setBorderRadius] = useState();
  const handleSlider = (event) => {
    setBorderRadius(event.target.value);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "palegreen",
        border: "1px solid grey",
        borderRadius: `${borderRadius}rem`,
        margin: "auto"
      }}
    >
      <input
        onChange={handleSlider}
        type="range"
        min="0"
        max="10"
        style={{ margin: "auto" }}
      />
    </div>
  );
};
