import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Loader from "../components/Loader";
import { ImageViewer } from "react-image-viewer-dv";
import WSPGallery from "../components/WSPGallery";

function Project() {
  const [inputs, setInputs] = useState([]);
  // const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [galleryImages, setgalleryImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUser();
    getImage();
  }, []);

  function getUser() {
    setIsLoading(true);
    axios
      .get(`https://demo4.octaveinfosys.com/API/ProjectDetails`, {
        params: { id: id },
      })
      .then(function (response) {
        setInputs(response.data);
        setIsLoading(false);
      });
  }
  function getImage() {
    axios
      // .get(`http://localhost/DandB/API/projectResidential`)
      .get(`https://demo4.octaveinfosys.com/API/projectImage`, {
        params: { id: id },
      })
      .then(function (response) {
        setgalleryImages(response.data);
      });
  }

  return (
    <>
      <Breadcrumb title={"Project"} tag="Project" />

      <div className="site-main">
        <section className="ttm-row project-single-section clearfix">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="container">
              {inputs.map((element) => {
                return (
                  <div className="row" key={element.id}>
                    <div className="col-lg-12">
                      <div className="ttm-pf-single-content-wrapper-innerbox ttm-pf-view-top-image">
                        <div className="ttm-pf-single-content-wrapper">
                          <div className="ttm_single_image-wrapper">
                            <img
                              className="img-fluid project-img"
                              src={`../super-admin/${element.image}`}
                              alt="portfolio-img"
                            />
                          </div>
                          <div className="ttm-pf-single-detail-box ttm-bgcolor-darkgrey ttm-textcolor-white">
                            <h2 className="ttm-pf-detailbox-title">
                              Project Details:
                            </h2>
                            <ul className="ttm-pf-detailbox-list">
                              <li>
                                <div className="ttm-pf-data-title">
                                  Project{" "}
                                </div>
                                <div className="ttm-pf-data-details">
                                  Outdoor Paint
                                </div>
                              </li>

                              <li>
                                <div className="ttm-pf-data-title">
                                  Location
                                </div>
                                <div className="ttm-pf-data-details">
                                  {element.location}
                                </div>
                              </li>
                              <li>
                                <div className="ttm-pf-data-title">
                                  Project Year
                                </div>
                                <div className="ttm-pf-data-details">
                                  {element.year}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ttm-pf-single-content-area">
                          <h2>{element.heading}</h2>

                          {element.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <WSPGallery galleryImages={galleryImages} />
            </div>
          )}
        </section>
      </div>

      <style>
        {
          "\
        .project-img{\
          width:1200px !important;\
        }\
        .project-image{\
          float: left !important;\
          height: 400px !important;\
          object-fit: cover !important;\
          cursor: pointer;\
        }\
      "
        }
      </style>
    </>
  );
}

export default Project;
