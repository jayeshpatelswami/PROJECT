import React from "react";
import "./schema.css";

const Schema = ({ text, imgUrl, Title }) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={imgUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Title}</h5>
          <p class="card-text">{text}</p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Schema;
