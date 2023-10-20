import React from "react";
import Crousal from "../Crousal/Crousal";
import "./home.css";
import Schema_Display from "../Schema_Display/Schema_Display";
const Home = () => {
  return (
    <div className="container">
      <div className="containera">
        <Crousal />
      </div>
      <div className="schema_container">
        <Schema_Display />
      </div>
    </div>
  );
};

export default Home;
