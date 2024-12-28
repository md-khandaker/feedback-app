import React from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/");
  };
  return (
    <>
      <div>NotFound, plese try again later</div>
      <h3>
        <button onClick={click}>click me</button> back to home page
      </h3>
    </>
  );
}

export default NotFound;
