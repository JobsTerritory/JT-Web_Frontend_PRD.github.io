import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import bgimgdrm from "../images/bgimgdrm.png";
import TestimonialCar from "./TestimonialCar";
import "../App.css";
import IndustryWeCater from "./IndustryWeCater";
import bgImg from "../images/bgImg.png";
import HypeDRM from "./HypeDRM";
import OurClients from "./OurClients";
import { BrowserView, MobileView } from "react-device-detect";
import img1 from "../images/hypeDRM/Group 422.png";
import img2 from "../images/hypeDRM/Group 242.png";
import img3 from "../images/hypeDRM/Group 241.png";
import img7 from "../images/hypeDRM/Group 426.png";
const ContractHiring = () => {
  return (
    <div>
      <Navbar btn_color="#FFC600" />
      <BrowserView>
        <div className="row">
          <div className="col md-1 DRMcol1">
            <img
              src="images/Flexible Hiring.png"
              style={{ marginLeft: "50px", width: "50vw", height: "476px" }}
            />

            <div className="fontLink DRMtitle">Gig/Flexible Hiring</div>
            <div className="fontLink DRMdesc">
              Since 2020, 76 per cent of leaders incorporates flexible hiring
              a.k.a Gig Hiring model to set up resilient human resources. The
              perfect fusion of permanent and flexible hiring authenticates to
              be the best staffing strategy by benefiting both businesses and
              staffing agencies. It does not matter if you have a small start-up
              or a big well-established business! With JT’s Gig/Flexible hiring,
              sign up new personnel according to your budget and other
              requirements.
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
            <div className="pt-32 drm-heading">WHY SHOULD YOU OPT FOR IT?</div>
            <p className="drm-para">
              Gig/Flexible Hiring is known to tackle immediate business
              requirements or create stand-by during emergencies. The firm can
              hire professionals with fine expertise and experience without any
              long term hassle. Tapping down the costs of hiring and coaching
              new personnel. Thence, keeping overall cost of the project at
              check.
            </p>
          </div>
          <div className="pt-20 ml-10">
            <img className="drm-img-bg" src={bgimgdrm} alt=""></img>
          </div>
        </div>
        {/* <HypeDRM/> */}
        <div className="fontLink ind-we-cater1">
          WHAT'S THE HYPE BEHIND JOB TERRITORY'S GIG/CONTRACT HIRING
        </div>
        <div
          className="container fontlink"
          style={{ color: "#535353", marginLeft: "13vw" }}
        >
          <div className="row align-items-start">
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img1}></img>
              <h5>Get in touch with high-quality & seasoned freelancers</h5>
            </div>
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img2}></img>
              <h5>JT put forwards flexible hiring services</h5>
            </div>
            <div className="col-3">
              <img className="ind-we-cater-icon" src={img3}></img>
              <h5>
                Engage with our AI matching engine, easy search, and targeted
                solutions.
              </h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-3"
              style={{ verticalAlign: "middle", marginLeft: "27vw" }}
            >
              <img className="ind-we-cater-icon" src={img7}></img>
              <h5>Can track our professionals and assess their abilities</h5>
            </div>
          </div>
        </div>
        <IndustryWeCater />
        <TestimonialCar />
      </BrowserView>
      <MobileView>
        <div className="fontLink DRMtitle">GIG/FLEXIBLE HIRING</div>

        <div className="fontLink DRMdesc">
          Since 2020, 76 per cent of leaders incorporates flexible hiring a.k.a
          Gig Hiring model to set up resilient human resources. The perfect
          fusion of permanent and flexible hiring authenticates to be the best
          staffing strategy by benefiting both businesses and staffing agencies.
          It does not matter if you have a small start-up or a big
          well-established business! With JT’s Gig/Flexible hiring, sign up new
          personnel according to your budget and other requirements.
        </div>
        <div className="list-container">
          <div className="list-heading">
            How JT can help you fulfill your job requirements
          </div>
          <ul>
            <li class="bi bi-check-circle-fill list-item">
              Allocates you the best candidate as per your project requirement
              through our huge database
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
              Negotiates on behalf of both parties to reach a mutual agreement
            </li>
          </ul>
        </div>
        <div style={{ backgroundImage: `url(${bgImg})`, paddingBottom: "5vw" }}>
          <div className="drm-heading">WHY SHOULD YOU OPT FOR IT</div>
          <img className="drm-img-bg" src={bgimgdrm}></img>
          <p className="drm-para">
            Gig/Flexible Hiring is known to tackle immediate business
            requirements or create stand-by during emergencies. The firm can
            hire professionals with fine expertise and experience without any
            long term hassle. Tapping down the costs of hiring and coaching new
            personnel. Thence, keeping overall cost of the project at check.
          </p>
        </div>
        <div className="fontLink ind-we-cater1">
          WHAT'S THE HYPE BEHIND JOB TERRITORY'S GIG/CONTRACT HIRING
        </div>
        <div
          className="container fontlink"
          style={{ color: "#535353", marginLeft: "8vw" }}
        >
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img1}></img>
              <h5>Hire as many as you want through monthly </h5>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img2}></img>
              <h5>
                Get a privilege to choose the best resources and personnel for
                your{" "}
              </h5>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-5">
              <img className="ind-we-cater-icon" src={img7}></img>
              <h5>Completes all your hiring</h5>
            </div>
            <div className="col-5">
              <img className="ind-we-cater-icon" src={img3}></img>
              <h5>HR expertise guidance </h5>
            </div>
          </div>
        </div>
        <IndustryWeCater />
        <TestimonialCar />
      </MobileView>
    </div>
  );
};

export default ContractHiring;
