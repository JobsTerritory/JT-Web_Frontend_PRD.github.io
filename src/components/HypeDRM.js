import React from "react";
import img1 from "../images/hypeDRM/Group 422.png";
import img2 from "../images/hypeDRM/Group 242.png";
import img3 from "../images/hypeDRM/Group 241.png";
import img4 from "../images/hypeDRM/Group 423.png";
import img5 from "../images/hypeDRM/Group 424.png";
import img6 from "../images/hypeDRM/Group 425.png";
import img7 from "../images/hypeDRM/Group 426.png";
import img8 from "../images/hypeDRM/Group 427.png";
import { BrowserView, deviceType, CustomView } from "react-device-detect";
const HypeDRM = () => {
  return (
    <div className="pb-10 pt-52" style={{ marginTop: "-23vw" }}>
      <div className="fontLink ind-we-cater1">
        WHAT'S THE HYPE BEHIND JOB TERRITORY'S DRM?
      </div>
      <BrowserView>
        <div
          className="container fontlink"
          style={{ color: "#535353", marginLeft: "13vw" }}
        >
          <div className="row align-items-start">
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img1} alt=""></img>
              <h5>
                Hire as many as you want through a fixed monthly subscription
              </h5>
            </div>
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img2} alt=""></img>
              <h5>
                Get a privilege to choose the best resources and personnel for
                your Company{" "}
              </h5>
            </div>
            <div className="col-3">
              <img className="ind-we-cater-icon" src={img3} alt=""></img>
              <h5>HR Expertise Guidance </h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img4} alt=""></img>
              <h5>No more middleman; interact with your dedicated resource</h5>
            </div>
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img5} alt=""></img>
              <h5>
                Exclusively skilled personnel & resources are set aside for you
              </h5>
            </div>
            <div
              className="col-3"
              style={{ marginRight: "5vw", marginTop: "-2vw" }}
            >
              <img className="ind-we-cater-icon" src={img6} alt=""></img>
              <h5>No long term Contract</h5>
            </div>
          </div>
          <div className="row align-items-end">
            <div
              className="col-3"
              style={{ marginRight: "5vw", marginLeft: "10vw" }}
            >
              <img className="ind-we-cater-icon" src={img7} alt=""></img>
              <h5>Completes all your hiring</h5>
            </div>
            <div className="col-3" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img8} alt=""></img>
              <h5>Nominal budget with lowered fill time</h5>
            </div>
          </div>
        </div>
      </BrowserView>
      <CustomView condition={deviceType === "mobile"}>
        <div className="container fontlink" style={{ color: "#535353" }}>
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img1} alt=""></img>
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "6vw" }}
              >
                Hire as many as you want through monthly{" "}
              </h6>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img2} alt=""></img>
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "5vw" }}
              >
                Get a privilege to choose the best resources and personnel for
                your Company{" "}
              </h6>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img4} alt=""></img>
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "7vw" }}
              >
                No more middleman; interact with your dedicated{" "}
              </h6>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img5} alt=""></img>
              <h6 style={{ textAlign: "center" }}>
                Exclusively skilled personnel {"&"} resources are set aside for
                your{" "}
              </h6>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img7} alt=""></img>
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "6vw" }}
              >
                Completes all your hiring
              </h6>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img className="ind-we-cater-icon" src={img8} alt=""></img>
              <h6
                className="internal-page-pic-icons-txt"
                style={{ marginLeft: "4vw" }}
              >
                Nominal budget with lowered fill time
              </h6>
            </div>
            <div className="row align-items-start">
              <div className="col-5">
                <img className="ind-we-cater-icon" src={img3} alt=""></img>
                <h6
                  className="int-page-pic-icons-txt"
                  style={{ marginLeft: "8vw" }}
                >
                  HR Expertise Guidance{" "}
                </h6>
              </div>
              <div
                className="col-5"
                style={{ marginRight: "5vw", marginTop: "-2vw" }}
              >
                <img
                  className="ind-we-cater-icon"
                  src={img6}
                  alt=""
                  style={{ marginLeft: "12vw", marginTop: "2vw" }}
                />
                <h6 style={{ whiteSpace: "nowrap", marginLeft: "11vw" }}>
                  No long term Contract
                </h6>
              </div>
            </div>
          </div>
        </div>
      </CustomView>
      <CustomView condition={deviceType === "tablet"}>
        <div
          className="container fontlink hype-drm-tablet"
          style={{ color: "#535353" }}
        >
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img1}
                alt=""
                style={{ marginLeft: "12vw" }}
              />
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "8vw", textAlign: "center" }}
              >
                Hire as many as you want through monthly{" "}
              </h6>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img2}
                alt=""
                style={{ marginLeft: "10vw" }}
              />
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "5vw", textAlign: "center" }}
              >
                Get a privilege to choose the best resources and personnel for
                your Company{" "}
              </h6>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img4}
                alt=""
                style={{ marginLeft: "12vw" }}
              />
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "7vw", textAlign: "center" }}
              >
                No more middleman; interact with your dedicated{" "}
              </h6>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img5}
                alt=""
                style={{ marginLeft: "12vw" }}
              />
              <h6 style={{ textAlign: "center", marginLeft: "5vw" }}>
                Exclusively skilled personnel {"&"} resources are set aside for
                your{" "}
              </h6>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img7}
                alt=""
                style={{ marginLeft: "12vw" }}
              />
              <h6
                className="int-page-pic-icons-txt"
                style={{ marginLeft: "8vw", textAlign: "center" }}
              >
                Completes all your hiring
              </h6>
            </div>
            <div className="col-5" style={{ marginRight: "5vw" }}>
              <img
                className="ind-we-cater-icon"
                src={img8}
                alt=""
                style={{ marginLeft: "12vw" }}
              />
              <h6
                className="internal-page-pic-icons-txt"
                style={{ marginLeft: "6vw" }}
              >
                Nominal budget with lowered fill time
              </h6>
            </div>
            <div className="row align-items-start">
              <div className="col-5">
                <img
                  className="ind-we-cater-icon"
                  src={img3}
                  alt=""
                  style={{ marginLeft: "12vw" }}
                />
                <h6
                  className="int-page-pic-icons-txt"
                  style={{ marginLeft: "16vw" }}
                >
                  HR Expertise Guidance{" "}
                </h6>
              </div>
              <div
                className="col-5"
                style={{ marginRight: "5vw", marginTop: "-2vw" }}
              >
                <img
                  className="ind-we-cater-icon"
                  src={img6}
                  alt=""
                  style={{ marginLeft: "17vw", marginTop: "2vw" }}
                />
                <h6 style={{ whiteSpace: "nowrap", marginLeft: "15vw" }}>
                  No long term Contract
                </h6>
              </div>
            </div>
          </div>
        </div>
      </CustomView>
    </div>
  );
};

export default HypeDRM;
