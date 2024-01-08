import React from "react";
import "./crousal.css";
import img1 from "../../Image/download.jpg";
import img2 from "../../Image/download1.jpg";
import img3 from "../../Image/download2.jpg";

const Crousal = () => {
  return (
    <div className="crousal_Wraper">
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide mailncrousal"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={img1} className="d-block img_block" alt="..." />
            {/* <img src="https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2Fnew-year.webp&w=1920&q=75" className="d-block img_block" alt="..." /> */}
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={img2} className="d-block img_block" alt="..." />

            {/* <img src="https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1920&q=75" className="d-block img_block" alt="..." /> */}
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block img_block" alt="..." />

            {/* <img src="https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1920&q=75" className="d-block img_block" alt="..." /> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Crousal;
