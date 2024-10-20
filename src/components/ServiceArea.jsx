import React from 'react'
import Breadcrumb from './Breadcrumb'
import ServicesSidebar from './ServicesSidebar'
import Tags from './Tags'

function ServiceArea(props) {
    return (
        <>
            <Breadcrumb title={props.title} tag={props.tag} />
            {/* <!--services details start--> */}
            <section className="service-details-section pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="service-details-wrap">
                                <img src="assets1/img/web17.png" alt="services" className="img-fluid rounded" />
                                <div className="services-detail-content mt-4">
                                    <h5  style={{textTransform: 'uppercase'}}>WEBSITE DESIGN AND DEVELOPMENT SERVICES IN {props.title}</h5>
                                    <p>A website is the first impression that a visitor would carry about your business. It must display your values, highlight your finest achievements or products, showcase your work or services and provide an opportunity for people to connect with you.</p>
                                    <p>Octave Infosys specializes in professional <b>Website Designer in {props.title} </b>that are focused on your objectives and business goals. From custom informational websites to data-rich applications or online stores, our Mumbai based in-house team have the latest technology at their disposal to create actionable results and create a return on your investment.</p>
                                    <p>Our designers integrate into development teams to create designs that anticipate and adapt to change. Our Expert desginers have worked with numerous industries</p>
                                    
                                </div>
                            </div>
                        </div>
                        <ServicesSidebar />
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="img-wrap">
                                <img src="assets1/img/webconsult.jpg" alt="services" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-8">
                        <p>If you are not selling online, you are losing your potential market. Its a well known fact that e-commerce is hot sector and it's getting lot of traction. Most of the audience online expect online ordering service from even the smallest businesses. Reports show that 65% expect small businesses to offer online shopping. With so many small and medium businesses already engaging in e-commerce, you could already be losing out to your competitors if you don’t sell online. Even people who don’t intend to shop online still research product information on a business’ website — 78% claimed they always compare prices and specifications online before purchasing a product in a store.</p>
                            <p>A new meaning to user-friendly navigation by using UI (User Interface) / UX (User Experience) design. A new dimension to website designing. A new wave of freshness and dynamism.</p>
                            <p>Our job does not end here. In fact, we'll help market your website. We will help build your site with search engine optimization in mind. This means more people will find your site via search engines and thereby lead to an increase in visitors. Search engines are the best way to gain website viewers for free. We can also work with you to create a paid online marketing campaign. For information view our Search Engine Optimization page.</p>
                            <p>Today, websites need to be more about experience than expertise. They need to be more of missionaries who convert than pilgrims that pray. we ensure that your website meets your business requirements. We design and develop all our websites with the customers needs at the forefront of our mind</p>
                        </div>
                    </div>
                    <Tags />
                </div>
            </section>
            {/* <!--services details end--> */}
        </>
    )
}

export default ServiceArea
