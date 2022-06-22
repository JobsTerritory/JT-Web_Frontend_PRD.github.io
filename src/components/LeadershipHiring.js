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
import img1 from "../images/hypeDRM/Group 422.png";
import img2 from "../images/hypeDRM/Group 242.png";
import img3 from "../images/hypeDRM/Group 241.png";
import img7 from "../images/hypeDRM/Group 426.png";

import { BrowserView, CustomView, deviceType } from "react-device-detect";
const LeadershipHiring = () => {
  return (
    <div>
      <Navbar btn_color="#FFC600" />
      <BrowserView>
        <div className="row">
          <div className="col md-1 DRMcol1">
            <img
              src="images/Leadership Hiri.png"
              style={{ marginLeft: "50px", width: "50vw", height: "476px" }}
            />

            <div className="fontLink DRMtitle">Leadership Hiring</div>
            <div className="fontLink DRMdesc">
              As per the survey, employees with engaging supervising leaders
              gets 39 per cent more inclined towards being active. Amidst all
              the work and chaos, competent workplace leadership is often
              underrated. Employees tend to look up to their leaders as paragons
              to the best version of themselves.
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
            <div className="pt-32 drm-heading">WHY SHOULD YOU OPT FOR IT</div>
            <p className="drm-para">
              Leaders not only speak for your company to customers and internal
              employees but also influences employee productivity. Thence,
              effective leaders become an important ingredient in embellishing
              an empire. Through our expertise network, executive hiring
              experience and market scrutiny, we abet our clients in connecting
              with befitting leaders for their business. We meticulously single
              out noteworthy business leaders with a perfect amalgamation of
              intelligence, maturity and capabilities.
            </p>
          </div>
          <div className="pt-32 ml-10">
            <img className="drm-img-bg" src={bgimgdrm} alt=""></img>
          </div>
        </div>
        {/* <HypeDRM/> */}
        <div className="mt-10 fontLink ind-we-cater1">
          What’s the hype behind Jobs Territory’s Leadership Hiring Service?
        </div>
        <div
          className="container mb-5 fontlink"
          style={{ color: "#535353", marginLeft: "13vw" }}
        >
          <div className="row align-items-start">
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img1}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>
                Keeps a tab on top management talent
              </h5>
            </div>
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img2}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>
                Networking with the affluentials and catalysts
              </h5>
            </div>
            <div className="col-3">
              <img
                className="ind-we-cater-icon"
                src={img3}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>
                Whenever you are scouting, we will offer you exclusive talents
              </h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-3"
              style={{ verticalAlign: "middle", marginLeft: "27vw" }}
            >
              <img
                className="ind-we-cater-icon"
                src={img7}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>
                Hand-picked after researching the industry and cultural
                compatibility with your company
              </h5>
            </div>
          </div>
        </div>
        <IndustryWeCater />
        <TestimonialCar />
      </BrowserView>
      <CustomView condition={deviceType === "mobile"}>
        <div className="fontLink DRMtitle">Leadership Hiring</div>

        <div className="fontLink DRMdesc">
          It might be overwhelming but, nothing feels more of a blessing than
          seeing your small business accelerating than you can manage. Constant
          expansion and changes in trends tend to surpass a business ability to
          hire full-time employees. In circumstances like these, part-time
          hiring comes to the rescue. With an abundance of benefits, if utilise
          your personnel sagely, a part-time workforce can help you grow your
          business tenfold.
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
          <div className="mt-40 drm-heading">WHY SHOULD YOU OPT FOR IT</div>
          <img className="drm-img-bg" src={bgimgdrm}></img>
          <p className="drm-para">
            As per the survey, employees with engaging supervising leaders gets
            39 per cent more inclined towards being active. Amidst all the work
            and chaos, competent workplace leadership is often underrated.
            Employees tend to look up to their leaders as paragons to the best
            version of themselves.
          </p>
        </div>
        <div className="fontLink ind-we-cater1">
          WHAT'S THE HYPE BEHIND JOB TERRITORY'S LEADERSHIP HIRING
        </div>
        <div
          className="container fontlink"
          style={{ color: "#535353", marginLeft: "8VW" }}
        >
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img1}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>
                Hire as many as you want through monthly{" "}
              </h5>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img2}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>
                Get a privilege to choose the best resources and personnel for
                your{" "}
              </h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-5" style={{ verticalAlign: "middle" }}>
              <img
                className="ind-we-cater-icon"
                src={img7}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>Completes all your hiring</h5>
            </div>
            <div className="col-5">
              <img
                className="ind-we-cater-icon"
                src={img3}
                style={{ marginBottom: "-3vw" }}
              ></img>
              <h5 style={{ fontWeight: "bold" }}>HR Expertise Guidance </h5>
            </div>
          </div>
        </div>

        <IndustryWeCater />
        <TestimonialCar />
      </CustomView>
      <CustomView condition={deviceType === "tablet"}>
        <div className="fontLink DRMtitle service-heading-tablet">
          Leadership Hiring
        </div>

        <div
          className="fontLink DRMdesc service-heading-para-tablet"
          style={{ marginRight: "5vw" }}
        >
          It might be overwhelming but, nothing feels more of a blessing than
          seeing your small business accelerating than you can manage. Constant
          expansion and changes in trends tend to surpass a business ability to
          hire full-time employees. In circumstances like these, part-time
          hiring comes to the rescue. With an abundance of benefits, if utilise
          your personnel sagely, a part-time workforce can help you grow your
          business tenfold.
        </div>
        <div
          className="list-container"
          style={{ marginRight: "35vw", marginBottom: "2vw" }}
        >
          <div className="list-heading list-heading-tablet">
            How JT can help you fulfill your job requirements
          </div>
          <ul style={{ marginLeft: "3px" }} className="list-item-tablet">
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
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            height: "52vw",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62))",
          }}
        >
          <div
            className="mt-40 drm-heading"
            style={{
              position: "relative",
              left: "175px",
              top: "10px",
              marginTop: "0",
            }}
          >
            WHY SHOULD YOU OPT FOR IT
          </div>
          {/* <img className="drm-img-tablet" src={bgimgdrm}></img> */}
          <p className="drm-para-tablet" style={{ top: "78rem" }}>
            As per the survey, employees with engaging supervising leaders gets
            39 per cent more inclined towards being active. Amidst all the work
            and chaos, competent workplace leadership is often underrated.
            Employees tend to look up to their leaders as paragons to the best
            version of themselves.
          </p>
        </div>
        <div className="fontLink ind-we-cater1">
          WHAT'S THE HYPE BEHIND JOB TERRITORY'S LEADERSHIP HIRING
        </div>
        <div
          className="container fontlink pph-drm-tablet"
          style={{ color: "#535353", marginLeft: "8VW" }}
        >
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img1}
                style={{ marginBottom: "-2vw", marginLeft: "4vw" }}
              ></img>
              <h5 style={{ marginLeft: "1vw" }}>
                Hire as many as you want through monthly{" "}
              </h5>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img2}
                style={{ marginBottom: "-3vw", marginLeft: "4vw" }}
              ></img>
              <h5 style={{}}>
                Get a privilege to choose the best resources and personnel for
                your{" "}
              </h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-5" style={{ verticalAlign: "middle" }}>
              <img
                className="ind-we-cater-icon"
                src={img7}
                style={{ marginLeft: "4vw", marginBottom: "-2vw" }}
              ></img>
              <h5 style={{ marginLeft: "2vw", marginBottom: "2vw" }}>
                Completes all your hiring
              </h5>
            </div>
            <div className="col-5" style={{ marginBottom: "2vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img3}
                style={{ marginBottom: "-3vw", marginLeft: "8vw" }}
              ></img>
              <h5 style={{ marginLeft: "8vw" }}>HR Expertise Guidance </h5>
            </div>
          </div>
        </div>

        <IndustryWeCater />
        <TestimonialCar />
      </CustomView>
    </div>
  );
};

export default LeadershipHiring;
