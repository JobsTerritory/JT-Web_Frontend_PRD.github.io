import React from "react";
import {
  BrowserView,
  CustomView,
  deviceType,
  MobileOnlyView,
  useMobileOrientation,
} from "react-device-detect";
import Navbar from "../../Navbar";
import "./founder.css";

const Founder = () => {
  const { isLandscape } = useMobileOrientation();

  return (
    <div>
      <BrowserView>
        <Navbar btn_color="#FFC600" />

        <section style={{ textAlign: "center" }}>
          <div className="box">
            <div className="bg"></div>
            <div className="conten">
              <p className="pt-32 mr-32 head">FOUNDER'S PLEDGE</p>
              <p className="text-3xl font-light text-left">
                We as the Jobs Territory team, strive to eliminate prejudices
                and disparities in the employment market. We deliberately plan
                our activities to promote gender equality and formulate
                strategies. Along with valuing every job seeker who possesses
                the necessary skills, we encourage them to pursue their dreams.
                Moreover, we proudly invest our resources in a variety of
                community initiatives to advance our recruitment practices.
                Being a founder of Jobs Territory, I pledge to make this world a
                better place by expanding and prospering our business together.
              </p>
            </div>
            <div className="bg-2"></div>
          </div>
          <img
            src="images-2/founder.png"
            alt="founder"
            className="rounded fndr"
          />
        </section>
      </BrowserView>
      <MobileOnlyView>
        <Navbar btn_color="#FFC600" style={{ backgroundColor: "#060b26" }} />

        <div className="box">
          <img src="images-2/founder.png" alt="founder" className="fndr" />
        </div>
        <div className="conten">
          <p className="head">FOUNDER'S PLEDGE</p>
          <p className="text">
            We as the Jobs Territory team, strive to eliminate prejudices and
            disparities in the employment market. We deliberately plan our
            activities to promote gender equality and formulate strategies.
            Along with valuing every job seeker who possesses the necessary
            skills, we encourage them to pursue their dreams. Moreover, we
            proudly invest our resources in a variety of community initiatives
            to advance our recruitment practices. Being a founder of Jobs
            Territory, I pledge to make this world a better place by expanding
            and prospering our business together.
          </p>
        </div>
      </MobileOnlyView>

      <CustomView condition={deviceType === "tablet"}>
        <Navbar btn_color="#FFC600" style={{ backgroundColor: "#060b26" }} />
        <div className="z-0 w-32 h-32 ml-10 mt-52 bg"></div>
        <div className="flex flex-col items-center justify-center pt-20">
          <div className="p-2 box-tab">
            <img
              src="images-2/founder.png"
              alt="founder"
              className={!isLandscape ? "h-[65vw]" : "h-[30vw]"}
            />
          </div>
          <p className="pt-6 text-3xl font-bold">FOUNDER'S PLEDGE</p>
          <p className="px-10 pt-2 text-2xl font-light text-center">
            We as the Jobs Territory team, strive to eliminate prejudices and
            disparities in the employment market. We deliberately plan our
            activities to promote gender equality and formulate strategies.
            Along with valuing every job seeker who possesses the necessary
            skills, we encourage them to pursue their dreams. Moreover, we
            proudly invest our resources in a variety of community initiatives
            to advance our recruitment practices. Being a founder of Jobs
            Territory, I pledge to make this world a better place by expanding
            and prospering our business together.
          </p>
          <div className="w-20 mb-20 mr-20 bg-2"></div>
        </div>
      </CustomView>

      {/* <div className="crds">
        <div className="crd1">
          <p>Job Seeker</p>
          <p>Looking for a job ?</p>
          <a href="">Apply Now</a>
        </div>
        <div className="crd2">
          <p>Recruiter</p>
          <p>Are U Recruiting ?</p>
          <a href="">Post a job</a>
        </div>
      </div> */}
    </div>
  );
};

export default Founder;
