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
import { BrowserView, CustomView, deviceType } from "react-device-detect";
import img1 from "../images/hypeDRM/Group 422.png";
import img2 from "../images/hypeDRM/Group 242.png";
import img4 from "../images/hypeDRM/Group 423.png";

const Bceh = () => {
  return (
    <div>
      <Navbar btn_color="#FFC600" />
      <BrowserView>
        <div className="row">
          <div className="col md-1 DRMcol1">
            <img
              src="images/Bluecollar Empl.png"
              style={{ marginLeft: "50px", width: "50vw", height: "476px" }}
            />
            <div className="fontLink DRMtitle">Blue-Collar Employee Hiring</div>
            <div className="fontLink DRMdesc">
              Applicants applying for blue-collar jobs normally come with
              unformatted & undetailed resumes. Thus, making it difficult for
              you to make a decision. It’s no secret that middlemen or agencies
              often create barriers between an employer and a job seeker to
              exploit both of them to make more money. The current situation in
              the blue-collar industry has tremendously improved through
              government initiatives such as Make in India, Digital India,
              Startup India and Skill India. Taking it forward, Jobs Territory
              has come up with Blue-Collar recruiting service.
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
            <div className="mt-32 drm-heading">WHY SHOULD YOU OPT FOR IT</div>
            <p className="drm-para">
              The professions' labour markets are wrecked up with plenty of jobs
              with the shifty talent to fill. With these constant obstacles,
              hiring blue-collar workers might be a tedious task. This can be
              made easy by opting for blue-collar employee hiring services with
              the help of the right recruitment agency. Thence, ensuring you a
              proper operation of the business.
            </p>
          </div>
          <div className="ml-10 pt-28">
            <img className="drm-img-bg" src={bgimgdrm}></img>
          </div>
        </div>
        {/* <HypeDRM/> */}
        <div>
          <div className="mt-10 fontLink ind-we-cater1">
            What’s the hype behind Jobs Territory’s Blue Collar Employee Hiring?
          </div>
          <div
            className="container fontlink"
            style={{ color: "#535353", marginLeft: "13vw" }}
          >
            <div className="row align-items-start">
              <div className="col-3" style={{ marginRight: "5vw" }}>
                <img
                  className="ind-we-cater-icon"
                  src={img1}
                  style={{ marginBottom: "-3vw" }}
                ></img>
                <h5 style={{ fontSize: "1.7em", fontWeight: "bold" }}>
                  Have everything and everyone you need
                </h5>
              </div>
              <div className="col-3" style={{ marginRight: "5vw" }}>
                <img
                  className="ind-we-cater-icon"
                  src={img2}
                  style={{ marginBottom: "-3vw" }}
                ></img>
                <h5 style={{ fontSize: "1.7em", fontWeight: "bold" }}>
                  Moulds as per your specific requirements.
                </h5>
              </div>
              <div className="col-3" style={{ marginRight: "5vw" }}>
                <img
                  className="ind-we-cater-icon"
                  src={img4}
                  style={{ marginBottom: "-3vw" }}
                ></img>
                <h5 style={{ fontSize: "1.7em", fontWeight: "bold" }}>
                  Enhance employee’s skills to make them more qualified
                </h5>
              </div>
            </div>
          </div>
        </div>
        <IndustryWeCater />
        <TestimonialCar />
      </BrowserView>
      <CustomView condition={deviceType === 'mobile'}>
        <div className="fontLink DRMtitle">BLUE-COLLAR EMPLOYEE HIRING </div>

        <div className="fontLink DRMdesc">
          Applicants applying for blue-collar jobs normally come with
          unformatted & undetailed resumes. Thus, making it difficult for you to
          make a decision. It’s no secret that middlemen or agencies often
          create barriers between an employer and a job seeker to exploit both
          of them to make more money. The current situation in the blue-collar
          industry has tremendously improved through government initiatives such
          as Make in India, Digital India, Startup India and Skill India. Taking
          it forward, Jobs Territory has come up with Blue-Collar recruiting
          service.
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
            The professions' labour markets are wrecked up with plenty of jobs
            with the shifty talent to fill. With these constant obstacles,
            hiring blue-collar workers might be a tedious task. This can be made
            easy by opting for blue-collar employee hiring services with the
            help of the right recruitment agency. Thence, ensuring you a proper
            operation of the business.
          </p>
        </div>
        <div>
          <div className="pt-40 fontLink ind-we-cater1">
            WHAT'S THE HYPE BEHIND JOB TERRITORY'S BLUE COLLAR HIRING
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

              <div className="row align-items-start">
                <div className="col-5" style={{ marginLeft: "25vw" }}>
                  <img
                    className="ind-we-cater-icon"
                    src={img4}
                    style={{ marginBottom: "-3vw" }}
                  ></img>
                  <h5 style={{ fontWeight: "bold" }}>
                    No more middleman; interact with your dedicated{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryWeCater />
        <TestimonialCar />
      </CustomView>
      <CustomView condition={deviceType === 'tablet'}>
        <div className="fontLink DRMtitle service-heading-tablet">BLUE-COLLAR EMPLOYEE HIRING </div>

        <div className="fontLink DRMdesc service-heading-para-tablet" style={{marginRight: '5vw'}}>
          Applicants applying for blue-collar jobs normally come with
          unformatted & undetailed resumes. Thus, making it difficult for you to
          make a decision. It’s no secret that middlemen or agencies often
          create barriers between an employer and a job seeker to exploit both
          of them to make more money. The current situation in the blue-collar
          industry has tremendously improved through government initiatives such
          as Make in India, Digital India, Startup India and Skill India. Taking
          it forward, Jobs Territory has come up with Blue-Collar recruiting
          service.
        </div>
        <div className="list-container" style={{marginRight: '35vw', marginBottom: '2vw'}}>
          <div className="list-heading list-heading-tablet">
            How JT can help you fulfill your job requirements
          </div>
          <ul style={{marginLeft: '3px'}} className='list-item-tablet'>
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
        <div style={{ backgroundImage: `url(${bgImg})`, height: '55vw', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62))' }}>
          <div className="drm-heading"
          style={{position: 'relative', left: '175px', top: '10px'}}>WHY SHOULD YOU OPT FOR IT</div>
          {/* <img className="drm-img-tablet" src={bgimgdrm} /> */}
          <p className="drm-para-tablet" style={{top: '83rem'}}>
            The professions' labour markets are wrecked up with plenty of jobs
            with the shifty talent to fill. With these constant obstacles,
            hiring blue-collar workers might be a tedious task. This can be made
            easy by opting for blue-collar employee hiring services with the
            help of the right recruitment agency. Thence, ensuring you a proper
            operation of the business.
          </p>
        </div>
        <div>
          <div className="pt-40 fontLink ind-we-cater1">
            WHAT'S THE HYPE BEHIND JOB TERRITORY'S BLUE COLLAR HIRING
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
                  style={{ marginBottom: "-3vw", marginLeft: '5vw' }}
                ></img>
                <h5 style={{ }}>
                  Hire as many as you want through monthly{" "}
                </h5>
              </div>
              <div className="col-5" style={{ marginRight: "5vw" }}>
                <img
                  className="ind-we-cater-icon"
                  src={img2}
                  style={{ marginBottom: "-3vw",marginLeft: '6vw' }}
                ></img>
                <h5 style={{ }}>
                  Get a privilege to choose the best resources and personnel for
                  your{" "}
                </h5>
              </div>

              <div className="row align-items-start">
                <div className="col-5" style={{ marginLeft: "25vw" }}>
                  <img
                    className="ind-we-cater-icon"
                    src={img4}
                    style={{ marginBottom: "-3vw",marginLeft: '5vw' }}
                  ></img>
                  <h5 style={{textAlign: 'center',marginRight:'8vw' }}>
                    No more middleman; interact with your dedicated{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryWeCater />
        <TestimonialCar />
      </CustomView>
    </div>
  );
};

export default Bceh;
