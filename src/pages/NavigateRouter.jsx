import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import NestedRouter from "./NestedRouter";

function NavigateRouter() {
  const status = 200;
  const navigete = useNavigate();
  const onClick = () => {
    navigete("/about");
  };
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      <h1>redirect</h1>
      <button onClick={onClick}>Click</button>
      <span> to go about page</span>
      <Routes>
        <Route path="/show" element={<NestedRouter />} />
      </Routes>
    </div>
  );
}

export default NavigateRouter;
