import React from 'react'
import { Link } from 'react-router-dom'
import Client from './Client'
import Testimonial from './Testimonial'

function WebsiteDesign(social) {
    return (
        <div className="main">
            <section className="ptb-70 gradient-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5 order-2-mob">
                            <div className="hero-slider-content text-white pt-5">
                                <strong>Website Designer</strong>
                                <h1 className="text-white">Grow Your Business With Octave Infosys</h1>
                                <p className="lead">We are web development company in Mumbai delivering quality, yet affordable
                                    websites for businesses all over the globe. </p>

                                <div className="action-btns mt-3">
                                    <Link to="contact" className="btn secondary-solid-btn">Start Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="image-wrap pt-5">
                                <img src="assets1/img/t1-hero-img.svg" className="img-fluid custom-width" alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--about us section start--> */}
            <section className="about-us-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="about-us-img">
                                <img src="assets1/img/about-us-img.svg" alt="about us" className="img-fluid about-single-img" />
                                <img src="assets1/img/about-us-img-bg.svg" alt="about bg" className="about-us-bg" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="about-us-content-wrap">
                                <strong className="color-secondary">About Us</strong>
                                <h3>The New Way to Progress</h3>
                                <span className="animate-border mb-4"></span>
                                <p>Octave Infosys is the highly acclaimed <b>website design company,</b> providing solutions to
                                    business, corporates and startups to get their own custom website.We offer an integrated set
                                    of digital services using our results driven approach to website design and development.
                                </p>
                                <ul className="list-unstyled tech-feature-list">
                                    <li className="py-1"><span
                                        className="ti-control-forward mr-2 color-secondary"></span><strong>Creative</strong>
                                        Websites Design
                                    </li>
                                    <li className="py-1"><span
                                        className="ti-control-forward mr-2 color-secondary"></span><strong>Social</strong>
                                        Media Marketing
                                    </li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>UI /
                                        UX </strong>
                                        design
                                    </li>
                                    <li className="py-1"><span
                                        className="ti-control-forward mr-2 color-secondary"></span><strong>Mobile</strong>
                                        Friendly Website
                                    </li>
                                    <li className="py-1"><span
                                        className="ti-control-forward mr-2 color-secondary"></span><strong>SEO</strong>
                                        Optimization Services
                                    </li>
                                    <li className="py-1"><span
                                        className="ti-control-forward mr-2 color-secondary"></span><strong>Company</strong>
                                        Brand Solutions
                                    </li>
                                    <li className="py-1"><span
                                        className="ti-control-forward mr-2 color-secondary"></span><strong>Graphic</strong>
                                        Designing
                                    </li>
                                    <li className="py-1"><span
                                        className="ti-control-forward mr-2 color-secondary"></span><strong>Digital</strong>
                                        Visiting Card
                                    </li>
                                </ul>
                                <div className="action-btns mt-4">
                                    <Link to="contact" className="btn secondary-solid-btn mr-3">Start Now</Link>
                                    <Link to="about" className="btn secondary-outline-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--about us section end--> */}

            {/* <!--call to action section start--> */}
            <section className="call-to-action-video">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="free-trial-image text-center">
                            <img src="assets1/img/cta-2-girl-img.jpg" alt="section" className="img-fluid" />
                            <a href="https://www.youtube.com/watch?v=HgDrRkFnChM"
                                className="popup-youtube video-play-icon white-bip shadow"><span className="ti-control-play"></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="free-trial-content text-white">
                            <h2 className="text-white">Best for Every Business</h2>
                            <p>Customised solutions for your brand. We know your brand is unique & that is why we have a step by step approach which helps us take you to your goals in the most efficient manner.</p>
                            <Link to="contact" className="btn primary-solid-btn mt-3">Start Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--call to action section end--> */}

            {/* <!--services section start--> */}
            <section className="services-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-5">
                                <strong className="color-secondary">Our Services</strong>
                                <h2>What Can We Do For You</h2>
                                <span className="animate-border mr-auto ml-auto mb-4"></span>
                                <p className="lead">Efficiently aggregate end-to-end core competencies without maintainable ideas.
                                    Dynamically
                                    foster tactical solutions without enabled value.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    
                    </div>
                </div>
            </section>
            {/* <!--services section end--> */}
            <Testimonial />
            <Client />
        </div>
    )
}

export default WebsiteDesign
