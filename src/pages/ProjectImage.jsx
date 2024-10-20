import React from "react";

function ProjectImage() {
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios
      .get(`https://demo4.octaveinfosys.com/API/projectImage`)
      .then(function (response) {
        console.log(response.data);
        setInputs(response.data);
      });
  }
  return (
    <>
      {inputs.map((element) => {
        return (
          <div className="row mt-25 mb-30">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ttm_single_image-wrapper mt-15 mb-15 res-991-mt-20">
                <img
                  style={{ width: "580", height: "610" }}
                  className="img-fluid"
                  src="assets/images/portfolio/portfolio-01-580x610.jpg"
                  alt="project-01"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ttm_single_image-wrapper mt-15 mb-15 res-991-mt-20">
                <img
                  style={{ width: "580", height: "610" }}
                  className="img-fluid"
                  src="assets/images/portfolio/portfolio-02-580x610.jpg"
                  alt="project-02"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="ttm_single_image-wrapper mt-15 mb-15 res-991-mt-20">
                <img
                  style={{ width: "580", height: "610" }}
                  className="img-fluid"
                  src="assets/images/portfolio/portfolio-03-580x610.jpg"
                  alt="project-03"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectImage;
