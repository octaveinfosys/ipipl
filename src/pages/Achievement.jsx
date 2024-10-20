import React from 'react'
import { NavLink } from "react-router-dom";

function Achievement() {
  return (
    <>
    <div className="site-main">
      <section className="grid-section clearfix pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
              <div className="section-title title-style-center_text">
                <div className="title-header">
                <h2 className="title mb-0"> Achievement</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
              <NavLink to="awards">
                <div className="portfolio-box featured-imagebox-portfolio style5">
                <h6 className="portfolio-heading"><u>AWARDS</u></h6>
                    <div className="featured-thumbnail">
                      <img
                        style={{ width: "610", height: "750" }}
                        className="img-fluid"
                        src="assets/images/awards/awards.jpg"
                        alt="img"
                      />
                    </div>
                </div>
              </NavLink>
            </div>
            <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
              <NavLink to="press">
                <div className="portfolio-box featured-imagebox-portfolio style5">
                <h6 className="portfolio-heading"><u>PRESS</u></h6>
                    <div className="featured-thumbnail">
                      <img
                        style={{ width: "610", height: "750" }}
                        className="img-fluid"
                        src="assets/images/awards/media.jpg"
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
  )
}

export default Achievement
