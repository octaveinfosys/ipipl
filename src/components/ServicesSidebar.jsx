import React from 'react'
import { NavLink } from 'react-router-dom';

function ServicesSidebar() {
    const styles = {

        well: {
          boxShadow: `10px 15px 30px rgb(1 39 80 / 50%)`,
        },
      };
    return (
        <>
            <div className="col-lg-4 col-md-4">
                <div className="sidebar-right pl-4" style={styles.well}>

                    {/* <!--all services list--> */}
                    <aside className="widget widget-categories">
                        <div className="widget-title" style={{paddingTop: 24}}>
                            <h5>All Services</h5>
                        </div>
                        <ul className="all-service-list">
                            <li><NavLink to="website-design-development">Website Design & Development</NavLink></li>
                            <li><NavLink to="website-maintenance-service">Website Maintance</NavLink></li>
                            <li><NavLink to="social-media-marketing">Social Media Marketing</NavLink></li>
                            <li><NavLink to="seo-service">SEO (Search Engine Optimization)</NavLink></li>
                            <li><a href="https://dbcards.in" rel="noreferrer"  target="_blank">Digital Visiting Card</a></li>
                            <li><NavLink to="graphic-designing">Graphic Design</NavLink></li>
                        </ul>
                    </aside>

                    {/* <!--need help--> */}
                    <aside className="widget widget-categories">
                        <div className="widget-title">
                            <h5>Need Help?</h5>
                        </div>
                        <p>We are available in 24/7 hours for dedicated support</p>
                        <ul className="primary-list mt-25">
                            <li><span className="ti-location-pin mr-2 color-primary"></span> Goshala Road Mulund West Mumbai.
                            </li>
                            <li><span className="ti-mobile mr-2 color-primary"></span> (+91) 99203 41097</li>
                            <li><span className="ti-email mr-2 color-primary"></span> info@octaveinfosys.com</li>
                        </ul>
                    </aside>

                </div>
            </div>
        </>
    )
}

export default ServicesSidebar
