import React from "react";
import "./normalize.css";
import "./index.css";

function Slider() {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider_inner">
          <div className="slider_item">
            <div className="slider_item-content">
              <div className="slider_title">
                <p className="slider_title-p">Taste your fav dish </p>
                <p>from luxury restaurant.</p>
              </div>
              <div className="slider_text">Call us and book your table</div>
              <a href="tel:1008005006" className="slider_phone">
                1-008 005 006
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slider;
