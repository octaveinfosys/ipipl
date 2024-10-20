import React from "react";
import OwlCarousel from "react-owl-carousel";
import { data } from "../ProjectSource";
import Breadcrumb from "../components/Breadcrumb";
import { ImageViewer } from "react-image-viewer-dv"

function Furniture() {
  return (
    <>
      <Breadcrumb title={"Designer Furniture"} tag="Designer Furniture" />
      <div className="site-main">
        <section class="ttm-row grid-section clearfix">
          <div class="container">
            <div class="row">
              <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style5">
                    <div class="featured-thumbnail">
                      <ImageViewer>
                        <img class="img-fluid" src="assets/images/portfolio/portfolio-01-610x750.jpg" alt="Furniture"/>
                      </ImageViewer>
                    </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style5">
                    <div class="featured-thumbnail">
                      <ImageViewer>
                        <img class="img-fluid" src="assets/images/portfolio/portfolio-02-610x750.jpg" alt="Furniture"/>
                      </ImageViewer>
                    </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style5">
                    <div class="featured-thumbnail">
                      <ImageViewer>
                        <img class="img-fluid" src="assets/images/portfolio/portfolio-03-610x750.jpg" alt="Furniture"/>
                      </ImageViewer>
                    </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style5">
                    <div class="featured-thumbnail">
                      <ImageViewer>
                        <img class="img-fluid" src="assets/images/portfolio/portfolio-04-610x750.jpg" alt="Furniture"/>
                      </ImageViewer>
                    </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style5">
                    <div class="featured-thumbnail">
                      <ImageViewer>
                        <img class="img-fluid" src="assets/images/portfolio/portfolio-05-610x750.jpg" alt="Furniture"/>
                      </ImageViewer>
                    </div>
                </div>
              </div>
              <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                <div class="featured-imagebox featured-imagebox-portfolio style5">
                    <div class="featured-thumbnail">
                      <ImageViewer>
                        <img class="img-fluid" src="assets/images/portfolio/portfolio-06-610x750.jpg" alt="Furniture"/>
                      </ImageViewer>
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

export default Furniture;
