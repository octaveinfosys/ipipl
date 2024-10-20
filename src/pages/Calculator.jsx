import React, { useEffect, useState } from "react";
import "./Calculator.scss";
import "../components/Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [selectedPprice, setSelectedPprice] = useState(null); // Track selected P price
  const [selectedLprice, setSelectedLprice] = useState(null); // Track selected L price
  const [isFlipped, setFlipped] = useState(false);
  const [result, setResult] = useState(0);

  const  [condition, setcondition] = useState(true);
  const className = condition ? "display-none" : "display-block";


  const multiply = () => {
    if(!num1){
      setcondition (false)
    }
    else if(!num2){
      setcondition (false)
    }
    else if(!name){
      setcondition (false)
    }
    else if(!email){
      setcondition (false)
    }
    else if(!phone){
      setcondition (false)
    }
    else{

      setFlipped(!isFlipped);
      setResult(num1 * num2);
    }
    
  };

  useEffect(() => {
    fetchOptions(); // Fetch options when the component mounts
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await fetch("https://demo4.octaveinfosys.com/API/package"); // Replace with your API endpoint
      const data = await response.json();
      setOptions(data); // Set the received data as options
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue); // Update selected option

    const selected = options.find((option) => option.city === selectedValue);

    setSelectedPprice(selected?.P_price); // Update selected Price
    setSelectedLprice(selected?.L_price);
  };
  const handleRadio = (event) => {
    setNum1(event.target.value);
  };

  const handleCarpetArea = (event) => {
    setNum2(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };


  return (
    <>
      <section className="conatact-section bg-layer-equal-height mt_15 ttm-bgcolor-grey bg-img1 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="section-title title-style-center_text pt-25">
                <div className="title">
                  <h2>Construction Cost Calculator</h2>
                  <h3 className="title-header">
                    Fill in a few details to get a brief idea of your estimated
                    cost of construction.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                <div
                  className="flip-card-front"
                  style={{ display: isFlipped ? "none" : "block" }}
                >
                  <div
                    className="featured-icon-box icon-align-top-content style7"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span p-10">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                      <div className="layer-content">
                        <div className="padding_top30">
                          <form
                            id="contact_form"
                            className="contact_form wrap-form clearfix"
                            method="post"
                            noValidate="novalidate"
                            action="#"
                          >
                            <div className="row m-0">
                              <div className="col-md-12">
                                <select
                                  className="form-control"
                                  onChange={handleOptionChange}
                                >
                                  <option disabled selected>Select City*</option>
                                  {options.map((option) => (
                                    <option key={option.id} value={option.city}>
                                      {option.city}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="col-md-6">
                                <label className="pt-2 text-left" >
                                  Select Package*
                                </label>
                                <div className="radio-tile-group">
                                  <div className="input-container">
                                    <input
                                      id="walk"
                                      className="radio-button"
                                      type="radio"
                                      name="radio"
                                      value={selectedPprice}
                                      onChange={handleRadio}
                                    />
                                    <div className="radio-tile">
                                      <label
                                        htmlFor="walk"
                                        className="radio-tile-label"
                                      >
                                        Premium
                                      </label>
                                    </div>
                                  </div>

                                  <div className="input-container">
                                    <input
                                      id="bike"
                                      className="radio-button"
                                      type="radio"
                                      name="radio"
                                      value={selectedLprice}
                                      onChange={handleRadio}
                                    />
                                    <div className="radio-tile">
                                      <label
                                        htmlFor="bike"
                                        className="radio-tile-label"
                                      >
                                        Luxury
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-12">
                                <input
                                  type="number"
                                  id="built"
                                  name="built"
                                  className="form-control"
                                  placeholder="Carpet Area*"
                                  value={num2}
                                  onChange={handleCarpetArea}
                                />
                                <span className="inputTag">(sq.ft)*</span>
                              </div>
                              <div className="col-md-12">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={name}
                                  className="form-control"
                                  placeholder="Full Name*"
                                  onChange={handleName}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="email"
                                  id="emil"
                                  name="email"
                                  value={email}
                                  className="form-control"
                                  placeholder="Email ID*"
                                  onChange={handleEmail}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="number"
                                  id="name"
                                  name="name"
                                  value={phone}
                                  className="form-control"
                                  placeholder="Phone Number*"
                                  onChange={handlePhone}
                                />
                              </div>
                              <div className="col-lg-12">
                                <label className={className}>Please Fill Require Field (*)</label>
                                <a
                                  type="button"
                                  id="name"
                                  value="Calculate"
                                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-squar ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-darkgrey mt-15"
                                  placeholder="Phone Number"
                                  required=""
                                  disabled=''
                                  onClick={multiply}
                                >Calculate</a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flip-card-back"
                  style={{ display: isFlipped ? "block" : "none" }}
                >
                  <div
                    className="featured-icon-box icon-align-top-content style7"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                      <div className="layer-content">
                        <div className="padding_top30">
                          <div className="result-heading">
                            <h2>Your Cost Estimated</h2>
                          </div>
                          <div className="content pt-20">
                                    <h5>City: <b>{selectedOption}</b></h5>
                                    <h5>Carpet Area: <b>{num2}</b> sq.ft</h5>
                                    <hr/>
                                    <h5>Total Estimated Cost:<b> &#8377;{result}</b></h5>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calculator;
