import React, { Component } from "react";
import BeforeAfterSlider from "react-before-after-slider";
import ReactCompareImage from "react-compare-image";

function Test() {

    const before =
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg";
    const after =
      "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";
  
 
  return (
    <>
       <div className="mainWrapper">
        <div className="contentWrapper">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
    </>
  );
}

export default Test;
