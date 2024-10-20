import React from "react";
import OwlCarousel from "react-owl-carousel";
import { data } from "../ProjectSource";
//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
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
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

function Projects() {
  return (
    <>
      <section className="ttm-row client-section mt_115 res-991-mt-45 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
              <div className="section-title title-style-center_text">
                <div className="title-header">
                  <h3>Our Best Projects</h3>
                  <h2 className="title">Our Featured Projects</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-12">
              <div className="testimonial-content-wrap">
                <OwlCarousel
                  className="owl-carousel owl-theme client-testimonial-1 custom-dot testimonial-shape"
                  {...options}
                >
                  {data.map((item, id) => (
                    <div>
                         <div className="featured-imagebox featured-imagebox-portfolio style3" key={id}>
                        <div className="featured-thumbnail">
                          <img style={{ width:"610",height:"750"}}
                            className="img-fluid"
                            src={item.img}
                            alt="project"
                          />
                        </div>

                        <div className="featured-content-inner">
                          <div className="featured-content">
                            <div className="featured-title">
                              <h3>
                                <a href="project-single.html">{item.heading}</a>
                              </h3>
                            </div>
                            <div className="featured-desc">
                              <p>
                              {item.content}
                              </p>
                            </div>
                          </div>
                          <div className="ttm-footer">
                            <a
                              className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-dark"
                              href="project-single.html"
                            >
                              Read More<i className="ti ti-plus"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                     
                
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Projects;
