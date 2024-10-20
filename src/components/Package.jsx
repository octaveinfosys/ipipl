import React from "react";

import PhotoGellery from "../PhotoGellery";

function Package() {
  return (
    <>
      <section className="welcome-section clearfix pt-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <div className="title-heade">
                  <h3>Our Best Package</h3>
                </div>
              </div>
              <div className="pb-5 res-991-pb-30">
                <p>Interior Overview Photo of Standard Package</p>
              </div>
              <div className="card card-nav-tabs">
                <div className="card-header card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#profile"
                            data-toggle="tab"
                          >
                            Standard
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#messages"
                            data-toggle="tab"
                          >
                            Classic
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#settings"
                            data-toggle="tab"
                          >
                            Premium️
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <div className="tab-content text-center">
                    <div className="tab-pane active" id="profile">
                      <section className="welcome-section clearfix">
                        <div className="container">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className=" res-991-pl-0 res-991-pt-0 res-991-mt-40 res-991-pb-25">
                                <div className="ttm-tabs ttm-tab-style-01">
                                  <ul className="tabs">
                                    <li className="tab active">
                                      <a href="#">Living Room</a>
                                    </li>
                                    <li className="tab">
                                      <a href="#">Modular Kitchen</a>
                                    </li>
                                    <li className="tab">
                                      <a href="#">Master Bedroom</a>
                                    </li>
                                    <li className="tab">
                                      <a href="#">Kids Room</a>
                                    </li>
                                    <li className="tab">
                                      <a href="#">TV Units</a>
                                    </li>
                                    <li className="tab">
                                      <a href="#">Wall Design</a>
                                    </li>
                                  </ul>
                                  <div className="content-tab">
                                    <div className="content-inner active">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <PhotoGellery />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="content-inner">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <PhotoGellery />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="content-inner">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <PhotoGellery />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-inner">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <PhotoGellery />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-inner">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <PhotoGellery />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content-inner">
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <PhotoGellery />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <div className="tab-pane" id="messages">
                      <p>
                        {" "}
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    </div>
                    <div className="tab-pane" id="settings">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Package;
