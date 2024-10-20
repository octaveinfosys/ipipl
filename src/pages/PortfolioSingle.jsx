import React from "react";
import { NavLink } from "react-router-dom";


function PortfolioSingle() {
  return (
    <>
      <>
      <div className="site-main" id="all-portfolioid">
        <section className="grid-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                  <h2 className="title mb-0"> Residential Projects</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-01-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-02-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">

                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-03-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-04-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-05-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-06-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-07-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-08-610x750.jpg"
                          alt="img"
                        />
                      </div>
                      <p className="portfolio-heading">Sample Text 7000 SQFT</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    </>
  );
}

export default PortfolioSingle;
