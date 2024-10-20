import React from "react";
import OwlCarousel from "react-owl-carousel";
import { data } from "../TeamSourse";
import ScrollAnimation from "react-animate-on-scroll";
//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: false,
  loop: true,
  autoplay: true,
  smartSpeed: 400,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
};
function Team() {
  return (
    <>
      <section className="team-section clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-12">
                <OwlCarousel
                  className="owl-carousel owl-theme client-testimonial-1 custom-dot testimonial-shape"
                  {...options}
                >
                  {data.map((item, id) => (
                    
                    <div  key={id}>
                     <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">
                                    <img   className="img-fluid" src={item.img} alt="team" />
                                </div>
                                {/* <div className="featured-iconbox ttm-media-link">
                                    <div className="media-block">
                                        <ul className="social-icons">
                                            <li className="social-facebook"><a href="!#" tabIndex="0"><i className="ti ti-facebook"></i></a></li>
                                            <li className="social-twitter"><a href="!#" tabIndex="0"><i className="ti ti-twitter-alt"></i></a></li>
                                            <li className="social-linkedin"><a href="!#" tabIndex="0"><i className="ti ti-linkedin"></i></a></li>
                                            <li className="social-pinterest"><a href="!#" tabIndex="0"><i className="ti ti-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href="team-details.html">{item.name}</a></h3>
                                    </div>
                                    <p className="team-position">{item.designation}</p>
                                </div>
                            </div>
                    </div>
                  ))}
                </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
