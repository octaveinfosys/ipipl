import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { data } from '../testimonialSource';
//Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots:true,
    loop:true,
    autoplay: true,
    smartSpeed: 500,
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
        }
    },
};

function Testimonial() {
    
  return (
   <>
           <section className="testimonial-section pt-100 pb-50">
                <div className="container">
                <div className="row">
                            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
                               
                                <div className="section-title title-style-center_text">
                                    <div className="title-header">
                                        <h3>What People Say</h3>
                                        <h2 className="title">Words Of Our Clients</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="row align-items-center">
                        
                        <div className="col-md-12 col-lg-12">
                            <div className="testimonial-content-wrap">
                              
                                <OwlCarousel className="owl-carousel owl-theme client-testimonial-1 custom-dot testimonial-shape" {...options}>
                                {
                                    data.map((item,id) => (
                                    
                                      
                                      <div className="testimonials style1"key={id}> 
                                            <div className="testimonials-inner-item">
                                                <div className="testimonial-content">
                                                    <div className="ttm-ratting-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <blockquote>{item.content}</blockquote>
                                                    <div className="testimonial-avatar">
                                                        <div className="testimonial-img">
                                                            <img style={{width:"150" ,height:"150"}}  className="img-fluid" src={item.img} alt="testimonial-img" />
                                                        </div>
                                                        <div className="testimonial-caption">
                                                            <h3>{item.name}</h3>
                                                            <label>{item.designation}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                  
                                    ))
                                }
                                </OwlCarousel>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
         

   </>
  )
}

export default Testimonial
