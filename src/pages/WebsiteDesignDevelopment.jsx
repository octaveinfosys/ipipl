import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ServicesSidebar from '../components/ServicesSidebar'

function WebsiteDesignDevelopment() {
  return (
   <>
      <Breadcrumb  title={"Website Development"} tag ="Website Development"/>

    {/* <!--services details start--> */}
            <section className="service-details-section pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="service-details-wrap">
                                <img src="assets1/img/web1.png" alt="services" className="img-fluid rounded"/>
                                <div className="services-detail-content mt-4">
                                    <h4>WEBSITE DESIGN AND DEVELOPMENT</h4>
                                    <p>A new meaning to user-friendly navigation by using UI (User Interface) / UX (User Experience) design. A new dimension to website designing. A new wave of freshness and dynamism.</p>

                                    <p>Octave Infosys specializes in professional Website designing company in Mumbai that are focused on your objectives and business goals. From custom informational websites to data-rich applications or online stores, our Mumbai based in-house team have the latest technology at their disposal to create actionable results and create a return on your investment.</p>

                                    <p>Our job does not end here. In fact, we'll help market your website. We will help build your site with search engine optimization in mind. This means more people will find your site via search engines and thereby lead to an increase in visitors. Search engines are the best way to gain website viewers for free. We can also work with you to create a paid online marketing campaign. For information view our Search Engine Optimization page.</p>

                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <div className="img-wrap">
                                                <img src="assets1/img/web.jpg" alt="services" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1 pb-3">We are Developing all Type of Website Like
                                                </li>

                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Business Website</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Responsive Website</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Product/Catalogue Websites</strong>
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>School or College Websites</strong>
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Photography Website</strong>

                                                </li>
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
            {/* <!--services details end--> */}
   </>
  )
}

export default WebsiteDesignDevelopment
