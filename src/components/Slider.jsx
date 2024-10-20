import React from "react";
import OwlCarousel from "react-owl-carousel";
import { data } from "../SilderData";
import "./Silder.css";

function Slider() {
  return (
    <>
      <div class="ttm-rev_slider-wide" style={{marginTop: "-80px"}}>
        <video autoPlay loop muted id="video">
          <source src="./assets/video/slider-video.mp4" type="video/mp4" />
          <source src="./assets/video/slider-video.mp4" type="video/ogg" />
        </video>
      </div>
    </>
  );
}

export default Slider;
