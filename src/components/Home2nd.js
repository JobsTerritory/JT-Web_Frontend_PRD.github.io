import React from "react";
import { CustomView, deviceType } from "react-device-detect";
import img1 from "../images/Group163.gif";
import img3 from "../images/Group227.gif";
import img2 from "../images/Group421.gif";

const Home2nd = () => {
  return (
    <div className="lg:pt-16 fontLink home2nd">
      <CustomView
        condition={deviceType === "browser" || deviceType === "mobile"}
      >
        <div className="pb-5 text-lg md:text-3xl lg:text-5xl ml-5 pt-[15vh] font-bold leading-relaxed">
          Make the right hires, faster with <br /> the world's leading
          recruiting software
        </div>

        <div className="fontLink">
          <div className="row ">
            <div className="Home2ndCol">
              <div className="Home-2-img-bg">
                <img className="Home2ndimg" src={img1} alt="" />
              </div>
              <div
                className="mt-2 fontLink Home2ndtitle"
                style={{ marginLeft: "3.2vw" }}
              >
                MACHINE LEARNING (AI)
              </div>
              <div style={{ maxWidth: "373px" }}>
                <div className=" fontLink Home2nddesc">
                  Find and attract candidates
                </div>
                <p className="Home2ndSumm">
                  At the time of job listing, our AI-powered sourcing generates
                  the list of the best prospective candidates as per the skill
                  requirement.
                </p>
              </div>
            </div>
            <div className="Home2ndCol">
              <div className="Home-2-img-bg">
                <img className="mt-2 ml-12 Home2ndimg" src={img2} alt="" />
              </div>
              <div className=" fontLink Home2ndtitle">MOTIVATE & ANALYSE</div>
              <div style={{ maxWidth: "373px" }}>
                <div className="fontLink Home2nddesc">
                  Putting the potential personnel forward
                </div>
                <p className="Home2ndSumm">
                  From collaborating with hiring teams to evaluate applicants to
                  collecting feedback and deciding who is best. It is an all in
                  one recruiting system.
                </p>
              </div>
            </div>
            <div className="Home2ndCol">
              <div className="Home-2-img-bg">
                <img className="Home2ndimg" src={img3} alt="" />
              </div>
              <div className="fontLink Home2ndtitle">RECRUIT & OPTIMISE</div>
              <div style={{ maxWidth: "373px" }}>
                <div className="fontLink Home2nddesc">
                  Effective hiring decisions in half the time
                </div>
                <p className="Home2ndSumm">
                  Work efficiently with a well-guided recruiting platform. It
                  simplifies the process and manual tasks such as scheduling,
                  interviews and approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomView>

      <CustomView condition={deviceType === "tablet"}>
        <div className="mb-[50vh]">
          <div className="pb-5 text-3xl leading-relaxed">
            Make the right hires, faster with <br />
            <b>the world's leading recruiting software</b>
          </div>

          <div className="fontLink">
            <div className="">
              <div className="Home2ndCol">
                <div className="Home-2-img-bg">
                  <img className="Home2ndimg" src={img1} alt="" />
                </div>
                <div
                  className="mt-2 fontLink text-[#C39700] text-xs"
                  style={{ marginLeft: "3.2vw" }}
                >
                  MACHINE LEARNING (AI)
                </div>
                <div style={{ maxWidth: "400px" }}>
                  <div className="mt-2 text-sm font-bold text-left ml-9 fontLink">
                    Find and attract candidates
                  </div>
                  <p className="Home2ndSumm">
                    At the time of job listing, our AI-powered sourcing
                    generates the list of the best prospective candidates as per
                    the skill requirement.
                  </p>
                </div>
              </div>
              <div className="Home2ndCol">
                <div className="Home-2-img-bg">
                  <img className="mt-2 ml-8 Home2ndimg" src={img2} alt="" />
                </div>
                <div className=" fontLink ml-7 text-[#C39700] text-xs">
                  MOTIVATE & ANALYSE
                </div>
                <div>
                  <div className="mt-2 text-sm font-bold text-left ml-11 fontLink">
                    Putting the <br /> potential personnel forward
                  </div>
                  <p className="max-w-[150px] mt-2 ml-10 text-left">
                    From collaborating with hiring teams to evaluate applicants
                    to collecting feedback and deciding who is best. It is an
                    all in one recruiting system.
                  </p>
                </div>
              </div>
              <div className="Home2ndCol">
                <div className="Home-2-img-bg">
                  <img className="Home2ndimg" src={img3} alt="" />
                </div>
                <div className="mt-2 fontLink text-[#C39700] text-xs">
                  RECRUIT & OPTIMISE
                </div>
                <div style={{ maxWidth: "373px" }}>
                  <div className="mt-2 ml-8 text-sm font-bold text-left fontLink">
                    Effective hiring decisions in half the time
                  </div>
                  <p className="max-w-[150px] mt-2 ml-10 text-left">
                    Work efficiently with a well-guided recruiting platform. It
                    simplifies the process and manual tasks such as scheduling,
                    interviews and approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomView>
    </div>
  );
};

export default Home2nd;
