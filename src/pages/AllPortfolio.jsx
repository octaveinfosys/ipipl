import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { NavLink } from "react-router-dom";
import "./portfolio.css";

function AllPortfolio() {


  return (
    <>
      <div className="site-main">
        <section className="grid-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                  <h2 className="title mb-0"> Our Highlighted Projects</h2>
                  </div>
                  {/* <div className="PorfolioTabs">
                    <ul>
                      <li>
                        <a href="!#">Residential </a>
                      </li>
                      <li>
                        <a href="!#">Commercial </a>
                      </li>
                      <li>
                        <a href="!#">Hospitality </a>
                      </li>
                      <li>
                        <a href="!#" style={{ border: "none" }}>
                          Retail
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                  <h6 className="portfolio-heading">RESIDENTIAL</h6>
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-01-610x750.jpg"
                          alt="img"
                        />
                      </div>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                  <h6 className="portfolio-heading">COMMERCIAL</h6>
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-02-610x750.jpg"
                          alt="img"
                        />
                      </div>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                  <h6 className="portfolio-heading">HOSPITALITY</h6>
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-03-610x750.jpg"
                          alt="img"
                        />
                      </div>
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                <NavLink to="portfolio">
                  <div className="portfolio-box featured-imagebox-portfolio style5">
                  <h6 className="portfolio-heading">RETAIL</h6>
                      <div className="featured-thumbnail">
                        <img
                          style={{ width: "610", height: "750" }}
                          className="img-fluid"
                          src="assets/images/portfolio/portfolio-04-610x750.jpg"
                          alt="img"
                        />
                      </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section className="ttm-row grid-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                  <h5 className="project-heading"> ONGOING & UP COMING PROJECTS</h5>
                  <i class="fa fa-angle-down fa-2x"></i>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="ttm-box-col-wrapper col-lg-3 col-md-4 col-sm-6">
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
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-4 col-sm-6">
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
                  </div>
                </NavLink>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-4 col-sm-6">
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
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AllPortfolio;
