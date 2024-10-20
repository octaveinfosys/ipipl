import React, { useState } from "react";
import $ from "jquery";
import loader from ".././loader.gif";

function Footer() {
  return (
    <>
      <footer className="footer ttm-bg ttm-bgcolor-darkgrey widget-footer clearfix gray-color">
        <div className="ttm-row-wrapper-bg-layer"></div>
        <div className="container">
          <div className="second-footer">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 widget-area">
                <div className="widget widget_text clearfix pt-100">
                  <div className="textwidget widget-text text-center themeColor">
                    <img
                      src="assets/images/footer-logo.png"
                      className="img-fluid"
                      style={{ width: "48%" }}
                    />
                    {/* <h1 className="my-font">
                    <span className="themeColor"> Let's</span><br/>Connect
                    </h1> */}
                    <div className="social-icons d-flex align-items-center justify-content-center">
                      <ul className="list-inline">
                        <li>
                          <a
                            href="https://www.instagram.com/iconprojects_ipipl/"
                            target="_blank"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/ipipl-icon-projects-inspace-pvt-ltd/mycompany/?viewAsMember=true "
                            target="_blank"
                          >
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/ipipl"
                            target="_blank"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="featured-icon-box style7 m-0 text-left pt-30">
                      <div className="featured-inner">
                        <div className="featured-title">
                          <h3>Icon Projects Inspace Pvt Ltd (Mumbai)</h3>
                        </div>
                        <div className="featured-desc">
                          <p>
                            14, AROTO HOUSE, P.K. ROAD, MULUND (WEST),
                            MUMBAI-400080.
                          </p>
                          <p>info@domainname.com</p>
                          <p>+91-22-25683916 /+91-22-25685619</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="featured-icon-box style7 m-0 text-left pt-30">
                      <div className="featured-inner">
                        <div className="featured-title">
                          <h3>Icon Projects Inspace Pvt Ltd (Kolkata)</h3>
                        </div>
                        <div className="featured-desc">
                          <p>
                            110, Haute Street, 86-A, Topsia Road South, Kolkata-
                            700046.
                          </p>
                          <p>info@domainname.com</p>
                          <p>+91-08981120240</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                  <div className="layer-content">
                    <div className="padding_top30">
                      <form
                        id="contact_form"
                        className="contact_form wrap-form clearfix"
                        method="post"
                        novalidate="novalidate"
                        action="#"
                      >
                        <div className="row ttm-boxes-spacing-20px">
                          <div className="col-md-6">
                            <label>
                              <span className="text-input">
                                <input
                                  name="name"
                                  type="text"
                                  value=""
                                  placeholder="First Name..."
                                  required="required"
                                />
                              </span>
                            </label>
                          </div>
                          <div className="col-md-6">
                            <label>
                              <span className="text-input">
                                <input
                                  name="address"
                                  type="text"
                                  value=""
                                  placeholder="Last Name..."
                                  required="required"
                                />
                              </span>
                            </label>
                          </div>
                          <div className="col-md-6">
                            <label>
                              <span className="text-input">
                                <input
                                  name="phone"
                                  type="text"
                                  value=""
                                  placeholder="Email Address..."
                                  required="required"
                                />
                              </span>
                            </label>
                          </div>
                          <div className="col-md-6">
                            <label>
                              <span className="text-input">
                                <input
                                  name="phone"
                                  type="text"
                                  value=""
                                  placeholder="Phone Number..."
                                  required="required"
                                />
                              </span>
                            </label>
                          </div>
                          <div className="col-md-10">
                            <label>
                              <span className="text-input">
                                <textarea
                                  name="message"
                                  cols="50"
                                  rows="2"
                                  placeholder="Enter Message Here..."
                                  required="required"
                                ></textarea>
                              </span>
                            </label>
                          </div>
                          <div className="col-lg-2 text-center">
                            <a
                              class="ttm-btn ttm-btn-size-xl ttm-btn-shape-squar ttm-btn-style-border ttm-icon-btn-center ttm-btn-color-darkgrey mt-25"
                              href="#"
                              tabindex="0"
                            >
                              <div>
                                <i
                                  class="fa fa-paper-plane fa-lg"
                                  data-fa-transform="rotate-30"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer-text">
            <div className="row copyright">
              <div className="col-lg-12 col-md-12">
                <p className="mb-0 res-991-pb-15 text-left">
                  Copyright © {new Date().getFullYear()} <a href="!#">IPIPL</a>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
