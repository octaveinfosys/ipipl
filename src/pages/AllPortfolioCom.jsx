import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

function AllPortfolioCom() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      getUser();
    }, []);

    function getUser() {
      setIsLoading(true)
      axios
        // .get(`http://localhost/DandB/API/projectResidential`)
        .get(`https://demo4.octaveinfosys.com/API/projectCommercial`)
        .then(function (response) {
          setData(response.data);
          setIsLoading(false)
        });
    }
    return (
      <>
      <Breadcrumb title={"commercial"} tag="commercial" />
        <div className="site-main">
        <section className="ttm-row grid-section clearfix">
          <div className="container">
          {isLoading ? (
            <Loader />
            ) : (
            <div className="row">
            {data.map((item) => {
                            return (
                              <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6"  key={item.id}>
                              <NavLink to={`/project-${item.id}`}>
                              <div className="featured-imagebox featured-imagebox-portfolio style3">
                                <div className="featured-thumbnail">
                                  <img
                                    style={{ width: "610", height: "750" }}
                                    className="img-fluid"
                                    src={`../super-admin/${item.thumbnail}`} 
                                    alt="portfolio"
                                  />
                                </div>
                                <div className="featured-content-inner">
                                  <div className="featured-content">
                                    <div className="featured-title">
                                      <h3>
                                      {item.heading} 
                                      </h3>
                                    </div>
                                   
                                  </div>
                                  <div className="ttm-footer">
                                    <NavLink to={`/project-${item.id}`}
                                      className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-dark"
                                    >
                                      View Full Details<i className="ti ti-plus"></i>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                              </NavLink>
                             
                            </div>
               )
              })}
            </div>
            )
}
          </div>
        </section>
        </div>
      </>
    );
}

export default AllPortfolioCom
