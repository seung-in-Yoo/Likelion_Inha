import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
        <div>
          <button onClick={()=>navigate(-1)}>
            뒤로 가기
          </button> 
          <Link to = "/Main">
          <button>
            메인으로 가기
          </button>
          </Link>
          </div>
    </>
  );
}

export default Header;