import React from "react";
import Navbar from "../Navbar";
import img1 from "../images/homeimg1.png";
import img2 from "../images/homeimg2.png";
import Home2nd from "./Home2nd";
import RecrServices from "../components/RecrServices";
import services from "../images/Group424.png";
import Testimonialcar from "./TestimonialCar";
import { Footer } from "../footer/footer";
import CompaniesIWC from "./CompaniesIWC";
import Clients from "./Clients";
import ClientsAlt from "./ClientsAlt";
import { CustomView, deviceType } from "react-device-detect";
import Mnav from "../mNav/Mnav";

const Home = () => {
  return (
    <div className="desktopHome fontLink">
      <CustomView
        condition={deviceType === "browser" || deviceType === "mobile"}
      >
        <div className="h-screen">
          <Navbar btn_color="white" nav_txt_col="black" />
          <div className="lg:pt-32 row">
            <div className="col md-1 homediv1">
              <p className="fontLink homepara1">
                Bridging between
                <br /> "Seekers and Seeking"
              </p>
              <p className="fontLink homepara2">
                A recruiting site where Amazing talent meets Inspiring
                Visionary.
              </p>
              <p className="fontLink homepara3">
                Get ready to cumulate your Dream Team with us!
              </p>
            </div>
            <div className="col md-1" style={{ maxWidth: "650px" }}>
              <img className=" homeImg1" src={img1} alt=""></img>
              <img className="homeImg2" src={img2} alt=""></img>
            </div>
          </div>
        </div>
        <div className="lg:h-[10vh]"></div>
        <Home2nd />

        <ClientsAlt />
        <Testimonialcar />
        <Footer />
      </CustomView>

      <CustomView condition={deviceType === "tablet"}>
        <div className="w-[100vw] pb-20">
          <Mnav btn_color="white" nav_txt_col="black" />
          <div className="lg:pt-32 ">
            <div className="flex flex-col mt-32 ml-10">
              <p className="text-2xl font-bold fontLink">
                Bridging between Seekers and <br /> Seeking
              </p>
              <div className="flex mt-10 space-x-4">
                <p className="text-2xl leading-relaxed fontLink">
                  A recruiting site where <br /> Amazing talent meets <br />
                  Inspiring Visionary.
                </p>
                <img className="h-64 w-80" src={img1} alt=""></img>
              </div>
              <div className="flex mt-8">
                <p className="text-2xl leading-relaxed fontLink">
                  Get ready to cumulate your Dream <br /> Team with us!
                </p>
                <img className="h-64 mr-2 w-80" src={img2} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[10vh]"></div>
        <Home2nd />

        <ClientsAlt />
        <Testimonialcar />
        <Footer />
      </CustomView>
    </div>
  );
};

export default Home;
