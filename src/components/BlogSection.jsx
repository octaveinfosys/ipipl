import React from "react";
import OwlCarousel from "react-owl-carousel";
import { data } from "../BlogSourse";
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
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

function BlogSection() {
  return (
    <>
      <section className="ttm-row bolg-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
              <div className="section-title title-style-center_text">
                <div className="title-header">
                  <h3>Recent Articles</h3>
                  <h2 className="title">Read Our Latest Articles</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-12">
                <OwlCarousel
                  className="owl-carousel owl-theme client-testimonial-1 custom-dot testimonial-shape"
                  {...options}
                >
                  {data.map((item, id) => (
                    <div className="ttm-box-col-wrapper"  key={id}>
                      <div className="featured-imagebox featured-imagebox-post style1">
                         <div className="featured-thumbnail"> 
                                        <img className="img-fluid" style={{width:"650" ,height:"510"}}  src={item.img} alt="blog" /> 
                                    </div>
                                    <div className="featured-content">
                                        <div className="ttm-box-post-date">
                                            <span className="ttm-entry-date">
                                                <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00"><span className="entry-month entry-year">{item.date}</span></time>
                                            </span>
                                        </div>
                                        <div className="post-meta">
                                            <span className="ttm-meta-line"><i className="ti ti-user ttm-textcolor-skincolor"></i>{item.name}</span>
                                            
                                        </div>
                                        <div className="featured-title">
                                            <h3><a href="blog-single.html">{item.heading}</a>
                                            </h3>
                                        </div>
                                        <div className="ttm-postbox-desc-footer">
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-squar ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-darkgrey" href="blog-single.html">Read More</a>
                                        </div>
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

export default BlogSection;
