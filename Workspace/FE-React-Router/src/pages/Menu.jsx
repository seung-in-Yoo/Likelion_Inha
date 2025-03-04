import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const Menu = () => {
  const [brandName, setbrandName] = useState('');
  const handleChange = (event) => {
      setbrandName(event.target.value);
  }
  return (
      <>
      <h1>Menu Page</h1>
      <input type="text" onChange={handleChange} value={brandName}/>
      <Link to = {`/product/${brandName}`}>
      <button>브랜드 페이지로 이동</button>
      </Link>
      </>
  )
}

export default Menu;