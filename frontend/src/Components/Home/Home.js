import React from "react";
import Crousal from "../Crousal/Crousal";
import "./home.css";
import Schema_Display from "../Schema_Display/Schema_Display";
import ParticularScema_Display from "../ParticularSchema/ParticularScema_Display";
import Footer from "../Footer";
import Faq from "./Faq/Faq";
const Home = () => {
  return (
    <div className="containe">
      <div className="containera">
        <Crousal />
      </div>
      <div className="schema_container">
        <ParticularScema_Display />
      </div>
      {/* <div className="schema_container">
        <Schema_Display />
      </div> */}
      <div className="schema_container">
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
