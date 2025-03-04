import "./Circle.css";
import React from "react";

const Circle = (props) => {
    return (
    <div
        className="circle"
        style={{
        backgroundColor: props.CircleColor || "black",
        }}
    ></div>
    
    );
    };
export default Circle;