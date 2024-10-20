import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { data } from "../ClientSource";
import './Client.css';

function Client() {
  return (
    <>
      <div className="site-main">
        <section className="team-section clearfix pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title mb-0">Our Client</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12">
                <table class="border-none">
                  <tr>
                    <td>
                    <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/1.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/2.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/3.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/4.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/5.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/6.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/7.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/8.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/9.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                    <td>
                      <div className="client-thumbnail">
                          <img
                            className="img-fluid"
                            src="assets/images/client/10.jpg"
                            alt="team"
                          />
                        </div>
                    </td>
                  </tr>
                </table>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Client;
