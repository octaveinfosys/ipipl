import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { data } from '../testimonialSource'

function Review() {
    return (
        <>
            <Breadcrumb title={"Client Review"} tag = "Client Review"/>


            <section className="customer-review-section ptb-100">
                <div className="container">
                    <div className="row">

                        {
                            data.map((item, id) => (
                                <div className="col-sm-12 col-md-6 col-lg-6" key={id}>
                                    <div className="single-review my-md-4 my-lg-4 my-sm-0">
                                        <div className="testimonial-single shadow-sm gradient-bg rounded p-4">
                                            <blockquote>
                                            {item.content}
                                            </blockquote>
                                        </div>
                                        <div className="client-info-wrap d-flex align-items-center mt-5">
                                            <div className="client-img mr-3">
                                                <img src={item.img} alt="client" width="60" className="img-fluid rounded-circle shadow-sm" />
                                            </div>
                                            <div className="client-info">
                                                <h5 className="mb-0">{item.name}</h5>
                                                <p className="mb-0">{item.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review
