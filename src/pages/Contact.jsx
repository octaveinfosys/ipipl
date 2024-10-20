import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useState } from "react";
import $ from "jquery";
import loader from ".././loader.gif";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [result, setResult] = useState("");
  $("#loader").hide();

  const handleSumbit = (e) => {
    $("#loader").show();
    e.preventDefault();
    // document.getElementById("#form").reset();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        $("#loader").hide();
        document.getElementById("form1").reset();
        setResult(data);
      },
    });
  };
  return (
    <>
      <div className="site-main" id="contactid">
        <section className="ttm-row pt-85 res-991-pt-45 pb-50 res-991-pb-50 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                  <h2 className="title mb-0">Contact</h2>
                  <ScrollAnimation animateIn="zoomIn">
                    <hr style={{ width: "20%" }}></hr>
                  </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="featured-icon-box style7 m-0 text-left p-30">
                  <div className="featured-inner">
                    <div className="featured-title">
                      <h3>Icon Projects Inspace Pvt Ltd (Mumbai)</h3>
                    </div>
                    <div className="featured-desc">
                      <p>
                      14, AROTO HOUSE, P.K. ROAD, MULUND (WEST), MUMBAI-400080.
                      </p>
                      <p>info@domainname.com</p>
                      <p>+91-22-25683916 /+91-22-25685619</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="featured-icon-box style7 m-0 text-left p-30">
                  <div className="featured-inner">
                    <div className="featured-title">
                      <h3>Icon Projects Inspace Pvt Ltd (Kolkata)</h3>
                    </div>
                    <div className="featured-desc">
                      <p>
                      110, Haute Street, 86-A, Topsia Road South, Kolkata- 700046.
                      </p>
                      <p>info@domainname.com</p>
                      <p>+91-08981120240</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
