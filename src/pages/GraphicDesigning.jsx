import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ServicesSidebar from '../components/ServicesSidebar'

function GraphicDesigning() {
  return (
   <>
   <Breadcrumb title={"Graphic Designing"} tag = "Graphic Designing" />
    <section className="service-details-section pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="service-details-wrap">
                                <img src="assets1/img/graphic.jpg" alt="services" className="img-fluid rounded"/>
                                <div className="services-detail-content mt-4">
                                    <h4>GRAPHIC DESIGNING</h4>
                                    <p>Graphic design is art with a purpose. It involves a creative and systematic plan to solve a problem or achieve certain objectives, with the use of images, symbols or even words. It is visual communication and the aesthetic expression of concepts and ideas using various graphic elements and tools.</p>
                                    <p>We are a creative arena filled with ideas, imagination and innovative solutions that delight our customers. We strive to add ideas that shine like stars and planets which nourishes the success stories of our clients. Our aim is to empower our customer with creative solutions that reap success.</p>
                                   
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <div className="img-wrap">
                                                <img src="assets1/img/seo1.jpg" alt="services" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1 pb-3">We serve all your designing needs like</li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Corporate Identity</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Product Branding</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Visual Merchandising</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Brand logo designing</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Company profile</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Brochures</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Leaflets</strong></li>
                                               
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                       <ServicesSidebar />
                    </div>
                </div>
            </section>
   </>
  )
}

export default GraphicDesigning
