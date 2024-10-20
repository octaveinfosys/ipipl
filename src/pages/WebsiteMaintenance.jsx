import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ServicesSidebar from '../components/ServicesSidebar'

function WebsiteMaintenance() {
  return (
   <>
   <Breadcrumb title={"Website Maintenance"} tag="Website Maintenance" />
   {/* <!--services details start--> */}
            <section className="service-details-section pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="service-details-wrap">
                                <img src="assets1/img/website-maintenance.svg" alt="services" className="img-fluid rounded"/>
                                <div className="services-detail-content mt-4">
                                    <h4>WEBSITE MAINTENANCE</h4>
                                    <p>Having Trouble with your existing website? Looking to revamp your current website? Do you need website maintenance? Your search ends here. We do one time maintenance or provide AMC.</p>

                                    <p>Our website maintenance programs ensure that your site is always current and your project stays within budget. Our standard program includes, content updates, update images, and support via telephone and e-mail. We include all of the services you require in order to ensure both the short and long-term success of your online marketing. It also includes revising, editing, or otherwise changing existing web pages to keep your website up to date.</p>

                                    <p>At Octave infosys, we don't treat making a web site as a single isolated assignment, but rather a lifelong commitment. A web site is the critical first impression of your company for your visitors. It should be fresh and dynamic at all times.</p>

                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <div className="img-wrap">
                                                <img src="assets1/img/web.jpg" alt="services" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1 pb-3">Why is Web Maintenance is important?</li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Customer Engagement</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Safety and Security</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Modern UI and Technology</strong>
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Features</strong>
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

export default WebsiteMaintenance
