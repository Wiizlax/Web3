import { useState } from "react";

function ColorBox() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleColorChange = () => {
    // Cycle through the colors
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  // Get the current and next color
  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];

  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: currentColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "18px",
    margin: "10px",
    border: "2px solid black",
  };

  return (
    <div style={boxStyle}>
      <button onClick={handleColorChange}>
        Next color: {nextColor}
      </button>
      <p>Current color: {currentColor}</p>
    </div>
  );
}

export default ColorBox;
