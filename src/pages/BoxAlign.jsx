import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";
import React from "react";

const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
      <div>
        <div style={{ display: "flex" ,flexDirection:"column"}} >
        <Box boxColor="red" text="red box"/>
        <Box boxColor="blue" text="blue box"/>
        <Box boxColor="green" text="green box"/>
        <Box boxColor="pink" text="pink box"/>
        </div>
        <div className="underCircle" style={{ display: "flex" }}>
          {circleColorArr.map((color,index) => (
            <Circle CircleColor = {color} key = {index}/>
        ))}
        </div>
      </div>
  );
};

export default BoxAlign;


