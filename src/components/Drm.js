import React from "react";
// import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import bgimgdrm from "../images/bgimgdrm.png";
import TestimonialCar from "./TestimonialCar";
import "../App.css";
import IndustryWeCater from "./IndustryWeCater";
import bgImg from "../images/bgImg.png";
import HypeDRM from "./HypeDRM";
// import OurClients from "./OurClients";
import { BrowserView, MobileView } from "react-device-detect";
const Drm = () => {
  return (
    <div>
      <Navbar btn_color="#FFC600" />
      <BrowserView>
        <div className="pt-5 row">
          <div className="col md-1 DRMcol1">
            <img
              src="images/DRM.png"
              style={{ marginLeft: "50px", width: "50vw", height: "476px" }}
              alt=""
            />
            <div className="fontLink DRMtitle">
              Dedicated Recruiter Management (DRM)
            </div>
            <div className="fontLink DRMdesc">
              True success in a business does not solely come from an increase
              in its sales but through its sagacious sourcing of high-quality
              talent and resources. In constantly fluctuating market and
              business trends, even the best sourcing topsides may seek support.
              Thence, big companies are apprenticing with recruitment process
              outsourcing companies to support their in-house teammates or
              entirely outsourcing HR recruiting functions.
            </div>
          </div>
          <div className="col md-1">
            <div className="list-container">
              <div className="list-heading">
                How JT can help you fulfill your job requirements
              </div>
              <ul>
                <li class="bi bi-check-circle-fill list-item">
                  Allocates you the best candidate as per your project
                  requirement through our huge database
                </li>
                <li class="bi bi-check-circle-fill list-item">
                  Saves your time by taking care of everything during the whole
                  hiring process.
                </li>
                <li class="bi bi-check-circle-fill list-item">
                  Conducts thorough background checks when considering potential
                  employees
                </li>
                <li class="bi bi-check-circle-fill list-item">
                  Our expertise and market knowledge proves to be priceless
                </li>
                <li class="bi bi-check-circle-fill list-item">
                  Negotiates on behalf of both parties to reach a mutual
                  agreement
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" className="fontLink">
          <div className="col md-1 drm-desc-container">
            <div className="pt-24 drm-heading">WHY SHOULD YOU OPT FOR IT?</div>
            <p className="drm-para">
              A Dedicated Resource Model is an engaging provision that ensures
              to fulfill all your HR requirements. With changes in the dynamics
              of the economy, Jobs Territory’s DRM delves into flexibility,
              security, and transparency for your business to run smoothly in
              this competitive global market. No more commission billings on
              every successful hire. Simply put up with a fixed monthly fee and
              get different kinds of technical groups and resources assigned to
              your company.
            </p>
          </div>
          <div className="ml-10 mt-28">
            <img className="rounded-md drm-img-bg" src={bgimgdrm} alt=""></img>
          </div>
        </div>
        <HypeDRM />
        <IndustryWeCater />
        <TestimonialCar />
      </BrowserView>
      <MobileView>
        <div className="fontLink DRMtitle">
          Dedicated Recruiter Management (DRM){" "}
        </div>

        <div className="fontLink DRMdesc">
          True success in a business does not solely come from an increase in
          its sales but through its sagacious sourcing of high-quality talent
          and resources. In constantly fluctuating market and business trends,
          even the best sourcing topsides may seek support. Thence, big
          companies are apprenticing with recruitment process outsourcing
          companies to support their in-house teammates or entirely outsourcing
          HR recruiting functions.
        </div>
        <div className="list-container">
          <div className="list-heading">
            How JT can help you fulfill your job requirements?
          </div>
          <ul>
            <li class="bi bi-check-circle-fill list-item">
              Allocates you the best candidate as per your project requirement
              through our huge database.
            </li>
            <li class="bi bi-check-circle-fill list-item">
              Saves your time by taking care of everything during the whole
              hiring process.
            </li>
            <li class="bi bi-check-circle-fill list-item">
              Conducts thorough background checks when considering potential
              employees.
            </li>
            <li class="bi bi-check-circle-fill list-item">
              Our expertise and market knowledge proves to be priceless.
            </li>
            <li class="bi bi-check-circle-fill list-item">
              Negotiates on behalf of both parties to reach a mutual agreement.
            </li>
          </ul>
        </div>
        <div
          style={{ backgroundImage: `url(${bgImg})`, paddingBottom: "5vw" }}
          className="flex"
        >
          <div className="drm-heading">WHY SHOULD YOU OPT FOR IT?</div>
          <img className="drm-img-bg" src={bgimgdrm} alt=""></img>
          <div className="font-semibold drm-para">
            A Dedicated Recruiter Model is an engaging provision, ensuring to
            fulfil all your HR requirements. It delves on flexibility, security
            and transparency for your business to run smoothly in this
            competitive global market.
          </div>

          <div className=" drm-para">
            Our successfully panned out services and quality tapers the cost of
            the project. No more commission billings on every successful hire.
            Simply put up with a fixed monthly fee and hire as many candidates
            as you want through dedicated recruiters and resources assigned to
            your company.
          </div>
        </div>
        <HypeDRM />
        <IndustryWeCater />
        <TestimonialCar />
      </MobileView>
    </div>
  );
};

export default Drm;
