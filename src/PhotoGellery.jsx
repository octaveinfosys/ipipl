import React, { useEffect } from 'react'
import { data } from "./PhotoSource";
import { ImageViewer } from "react-image-viewer-dv"

function PhotoGellery() {
  const photos = [
    {
      src: "assets/images/portfolio/portfolio-05-740x576.jpg",
      width: 800,
      height: 600,
      srcSet: [
        { src: "assets/images/portfolio/portfolio-05-740x576.jpg", width: 400, height: 300 },
        { src: "assets/images/portfolio/portfolio-05-740x576.jpg", width: 200, height: 150 },
      ],
    },
    {
      src: "assets/images/portfolio/portfolio-05-740x576.jpg",
      width: 1600,
      height: 900,
      srcSet: [
        { src: "assets/images/portfolio/portfolio-05-740x576.jpg", width: 800, height: 450 },
        { src: "assets/images/portfolio/portfolio-05-740x576.jpg", width: 400, height: 225 },
      ],
    },
  ];
  return (
    <>
     <ImageViewer>
            <img src="assets/images/portfolio/portfolio-05-740x576.jpg"  alt="Your image" />
          </ImageViewer>
     
    </>
  )
}

export default PhotoGellery
