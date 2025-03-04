import { forwardRef } from "react";

const Input = ({}, ref) => {
  return (
    <div>
      <input ref={ref} className="input" />
    </div>
  );
};

export default forwardRef(Input);
