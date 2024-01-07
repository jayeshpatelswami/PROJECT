import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const About = () => {
  return (
    <div
      className="container p-3  rounded"
      style={{ backgroundColor: "#9EC8B9" }}
    >
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to our website. We are a team of passionate individuals
          dedicated to providing high-quality solutions.
        </p>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
    </div>
  );
};

export default About;
