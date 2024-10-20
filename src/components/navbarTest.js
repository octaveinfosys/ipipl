import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar1() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <header id="masthead" className="header ttm-header-style-01">
        <div id="site-header-menu" className="site-header-menu">
          <div className="site-header-menu-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                    <div className="site-branding ">
                      <a
                        className="home-link"
                        href="!#"
                        title="Inoterior"
                        rel="home"
                      >
                        <img
                          id="logo-img"
                          width="115"
                          height="53"
                          className="img-fluid"
                          src="assets/images/logo.png"
                          alt="logo-img"
                        />
                      </a>
                    </div>
                    <div className="d-flex flex-row">
                      <div
                        className="mobile-menu-icon"
                        onClick={() => setIsMobile(!isMobile)}
                      >

                        {isMobile ? (
                          <i className="fa fa-times fa-2x"></i>
                        ) : (
                          <i className="fa fa-bars fa-2x"></i>
                        )}
                      </div>
                      <nav
                        className={
                          isMobile
                            ? "main-menu menu-mobile show"
                            : "main-menu menu-mobile"
                        }
                      >
                        <ul className="menu" onClick={() => setIsMobile(false)}>
                          <li>
                            <NavLink className="mega-menu-item active" to="/">
                              {" "}
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="about">About Us</NavLink>
                          </li>

                          <li>
                            <NavLink to="all-portfolio">portfolio</NavLink>
                          </li>

                          <li>
                            <NavLink to="achievement">Achievement</NavLink>
                          </li>
                          <li>
                            <NavLink to="client">Client</NavLink>
                          </li>
                          <li>
                            <NavLink to="contact">Contact</NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar1;
