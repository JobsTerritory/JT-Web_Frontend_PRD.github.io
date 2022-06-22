import { BrowserView, MobileView } from "react-device-detect";
// import "../src/App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Mnav from "./mNav/Mnav";

class Navbar extends Component {
  render() {
    let { btn_color, nav_txt_col, nav_drop_color, color } = this.props;
    return (
      <>
        <BrowserView>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid" style={{ fontSize: "27px" }}>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse pull-right"
                id="navbarSupportedContent"
              >
                <ul className="mb-2 ml-10 navbar-nav mb-lg-0">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li className="nav-item">
                      <a
                        className="font-bold nav-link active"
                        aria-current="page"
                        style={{ color: nav_txt_col }}
                      >
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/services" style={{ textDecoration: "none" }}>
                    <li className="nav-item">
                      <a
                        className="font-bold nav-link"
                        style={{ color: nav_txt_col }}
                      >
                        Recruitment Services
                      </a>
                    </li>
                  </Link>
                  <Link to="/womenterritory" style={{ textDecoration: "none" }}>
                    <li className="nav-item">
                      <a
                        className="font-bold nav-link"
                        style={{ color: nav_txt_col }}
                      >
                        Women's Territory
                      </a>
                    </li>
                  </Link>
                  <li className="nav-item dropdown">
                    <a
                      className="font-bold nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: nav_txt_col }}
                    >
                      Know more
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                      style={{ color: nav_txt_col }}
                    >
                      <Link to="/founder" style={{ textDecoration: "none" }}>
                        <li
                          className="font-bold dropdown-item"
                          style={{ color: nav_drop_color }}
                        >
                          Founders Pledge
                        </li>
                      </Link>
                      <Link
                        to="/aboutus"
                        aria-labelledby="navbarDropdown"
                        style={{ color: nav_txt_col, textDecoration: "none" }}
                      >
                        <li
                          className="font-bold dropdown-item"
                          style={{ color: nav_drop_color }}
                        >
                          About us
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </BrowserView>
        <MobileView>
          <Mnav color={color} />
        </MobileView>
      </>
    );
  }
}

export default Navbar;
