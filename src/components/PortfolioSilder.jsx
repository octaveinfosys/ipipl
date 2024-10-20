import React from "react";

function ProjectSilder() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className="ttm-rev_slider-wide pt-20 pb-20">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="2000"
          data-pause="false"
        >
          <ol className="carousel-indicators">
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 h-100"
                src="assets/images/slides/1.webp"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100 h-100"
                src="assets/images/slides/2.webp"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100 h-100"
                src="assets/images/slides/3.webp"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100 h-100"
                src="assets/images/slides/4.webp"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100 h-100"
                src="assets/images/slides/5.webp"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100 h-100"
                src="assets/images/slides/6.webp"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="false"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="false"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <section>
        <div className="portfolio-deatls text-center">
          <p>House in the Clouds <br></br>Kothagiri, India</p>
        </div>
      </section>
    </>
  );
}

export default ProjectSilder;
