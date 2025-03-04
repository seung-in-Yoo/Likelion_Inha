import React, { useState } from "react";
import Button from "../components/Button/Button";

const SelectButtons = () => {
  const [selectedButton, setSelectedButton] = useState(""); 

  const buttonList = ['Primary', 'Secondary', 'Default'];

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); 
  };
  
  return (
    <div className="selectBtns">
      {buttonList.map((buttonName, index) => (
        <Button
          key={index}
          onClick={() => handleButtonClick(buttonName)}
          className={selectedButton === buttonName ? "selected" : ""}
        >
          {buttonName}
        </Button>
      ))}
    </div>
  );
};

export default SelectButtons;
