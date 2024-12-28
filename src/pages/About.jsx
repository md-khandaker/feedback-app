import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>Feecback App by APL Group</h1>
      <p>verssion 2.0.0</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default About;
