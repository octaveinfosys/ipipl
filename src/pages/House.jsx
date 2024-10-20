import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function House() {
  return (
    <div className="site-main" id="houseid">
      <section className="ttm-row bolg-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="section-title title-style-center_text">
                <div className="title-header">
                <h2 className="title mb-0">House of Porwal</h2>
                    <ScrollAnimation animateIn="zoomIn">
                      <hr style={{ width: "40%" }}></hr>
                    </ScrollAnimation>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-0 res-991-pt-0">
            <div className="ttm-box-col-wrapper col-lg-6">
              <div className="featured-imagebox featured-imagebox-post style1">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-02-650x510.jpg"
                  alt="img"
                />
                <div className="featured-content">
                  <div className="featured-title">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttm-box-col-wrapper col-lg-6">
              <div className="featured-imagebox featured-imagebox-post style1 ">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-06-650x510.jpg"
                  alt="img"
                />
                <div className="featured-content">
                  <div className="featured-title">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ttm-box-col-wrapper col-lg-6">
              <div className="featured-imagebox featured-imagebox-post style1">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-01-650x510.jpg"
                  alt="img"
                />
                <div className="featured-content">
                  <div className="featured-title">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttm-box-col-wrapper col-lg-6">
              <div className="featured-imagebox featured-imagebox-post style1">
                <img
                  className="img-fluid"
                  src="assets/images/blog/blog-04-650x510.jpg"
                  alt="img"
                />
                <div className="featured-content">
                  <div className="featured-title">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default House;
