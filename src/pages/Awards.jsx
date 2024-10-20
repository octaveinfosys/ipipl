import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './Awards.css'

function Awards() {
  return (
    <>
      <div className="site-main" id="awardsid">
        <section className="bolg-section clearfix pb-80">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title mb-0"> Awards</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                  <div className="featured-imagebox-portfolio style5">
                    <div className="featured-thumbnail">
                      <a class="hover_image" href="!#">
                        <img
                          className="img-fluid"
                          src="assets/images/awards/new/1.jpg"
                          alt="img"
                        />
                        <img
                          className="img-fluid hide"
                          src="assets/images/awards/new/2.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                  <div className="featured-imagebox-portfolio style5">
                    <div className="featured-thumbnail">
                      <a class="hover_image" href="!#">
                        <img
                          className="img-fluid"
                          src="assets/images/awards/new/3.jpg"
                          alt="img"
                        />
                        <img
                          className="img-fluid hide"
                          src="assets/images/awards/new/2.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
              </div>
              <div className="ttm-box-col-wrapper col-lg-3 col-md-3 col-sm-6">
                  <div className="featured-imagebox-portfolio style5">
                    <div className="featured-thumbnail">
                      <a class="hover_image" href="!#">
                        <img
                          className="img-fluid"
                          src="assets/images/awards/new/2.jpg"
                          alt="img"
                        />
                        <img
                          className="img-fluid hide"
                          src="assets/images/awards/new/1.jpg"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Awards;
