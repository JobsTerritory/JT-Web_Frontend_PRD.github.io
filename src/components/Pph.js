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
import img4 from "../images/hypeDRM/Group 423.png";
import img5 from "../images/hypeDRM/Group 424.png";
import img7 from "../images/hypeDRM/Group 426.png";

const Pph = () => {
  return (
    <div>
      <Navbar btn_color="#FFC600" />
      <BrowserView>
        <div className="row">
          <div className="col md-1 DRMcol1">
            <img
              src="images/Pay Per Hire.png"
              style={{ marginLeft: "50px", width: "50vw", height: "476px" }}
            />

            <div className="fontLink DRMtitle">Pay Per Hire</div>
            <div className="fontLink DRMdesc">
              The current recruiting system somehow fails to meet the ongoing
              challenges and dynamic trends, making it difficult to cast
              appropriate candidates for the profile. Introducing, Pay Per
              Hiring solutions. It is a revolutionised recruiting system to make
              your hiring goals easier, flexible and more cost-effective.
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
        <div class="row" className="pb-64 fontLink">
          <div className="col md-1 drm-desc-container">
            <div className="pt-24 drm-heading">WHY SHOULD YOU OPT FOR IT?</div>
            <p className="drm-para">
              Whether it is an arduous job or a large number of openings or
              scouting around to get high-caliber personnel, Pay per hire system
              is always a rescue. Organizations simply have to put forward the
              job profile and project requirements, in return for which
              recruiting agency simply deliver their candidates to operate for
              them.
              <br /> An investment in recruitment can be more strategic when you
              use a pay-per-hire system. As a result, it helps in evaluating
              hiring costs and also provides a cost estimate for
              difficult-to-fill positions.
            </p>
          </div>
          <div className="pl-12 mt-32">
            <img className=" drm-img-bg" src={bgimgdrm} alt=""></img>
          </div>
        </div>
        {/* <HypeDRM/> */}
        <div
          className="fontLink ind-we-cater1"
          style={{ textShadow: "-1px 0 black" }}
        >
          WHAT'S THE HYPE BEHIND JOB TERRITORY'S PAY PER HIRE
        </div>
        <div
          className="container fontlink"
          style={{ color: "#535353", marginLeft: "13vw" }}
        >
          <div className="row align-items-start">
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img1}></img>
              <h5>Save your time by sending qualified and skilled personnel</h5>
            </div>
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img4}></img>
              <h5>No more scouting around!</h5>
            </div>
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img5}></img>
              <h5>Highly qualified employees for your position</h5>
            </div>
          </div>
          <div className="pb-10 ml-24 row-align-items-center">
            <div
              className="col-3"
              style={{ verticalAlign: "middle", marginLeft: "22vw" }}
            >
              <img className="ind-we-cater-icon" src={img7}></img>
              <h5>No hush of payments. Only pay if you make a hire</h5>
            </div>
          </div>
        </div>
        <IndustryWeCater />
        <TestimonialCar />
      </BrowserView>
      <MobileView>
        <div className="fontLink DRMtitle">PAY PER HIRE </div>

        <div className="fontLink DRMdesc">
          The current recruiting system somehow fails to meet the ongoing
          challenges and dynamic trends, making it difficult to cast appropriate
          candidates for the profile. Introducing, Pay Per Hiring solutions. It
          is a revolutionised recruiting system to make your hiring goals
          easier, flexible and more cost-effective.
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
            Whether it is an arduous job or a large number of openings or
            scouting around to get high calibre personnel, Pay per hire system
            is always a rescue. Organisations simply have to put forward the job
            profile and project requirements, in return for which recruiting
            agency simply deliver their candidates to operate for them.
          </p>
        </div>
        {/* <HypeDRM/> */}
        <div className="fontLink ind-we-cater1">
          WHAT'S THE HYPE BEHIND JOB TERRITORY'S PAY PER HIRE
        </div>
        <div
          className="container pb-10 fontlink"
          style={{ color: "#535353", marginLeft: "8VW" }}
        >
          <div className="row align-items-center">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img4}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5>No more middleman; interact with your dedicated </h5>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img5}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5>
                Exclusively skilled personnel {"&"} resources are set aside for
                your{" "}
              </h5>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img7}></img>
              <h5>Completes all your hiring</h5>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img1}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5>Hire as many as you want through monthly </h5>
            </div>
          </div>
        </div>
        <IndustryWeCater />
        <TestimonialCar />
      </MobileView>
    </div>
  );
};

export default Pph;
