import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./wsp-gallery.css";

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            {/* <img src={galleryImages[slideNumber].src} alt='' /> */}
            <img
              src={`../super-admin/${galleryImages[slideNumber].project_image}`}
              alt=""
            />
          </div>
        </div>
      )}

      <div className="row mt-25 mb-30">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="col-lg-3 col-md-3 col-sm-12"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <div className="ttm_single_image-wrapper mt-30 mb-30 res-991-mt-20">
                  <img className="img-fluid project-image"  src={`../super-admin/${slide.project_image}`} alt="hh" />
                </div>
              </div>
            );
          })}
      </div>
    </>

  );
};

export default WSPGallery;
