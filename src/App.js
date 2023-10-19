import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (event) => {
    setText(event.target.value);
    setWordCount(event.target.value.split(" ").length);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column", // To place word count below the text box
    alignItems: "center", // To horizontally center the input and word count
    marginTop: "75px", // Add space between the text box and the top
  };

  const inputStyle = {
    width: "300px", // Adjust the width to make the text box larger
    padding: "10px", // Add padding for better styling
    fontSize: "16px", // Set the font size
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <p>Word count: {wordCount-1}</p>
    </div>
  );
};

export default App;
