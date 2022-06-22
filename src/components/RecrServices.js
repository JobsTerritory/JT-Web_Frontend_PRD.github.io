import React from "react";
import Navbar from "../Navbar";
import Imgrecrbtn from "./ImgRecrBtn";
import btnImg1 from "../images/rec1.png";
import btnImg2 from "../images/rec2.png";
import btnImg3 from "../images/rec3.png";
import btnImg4 from "../images/rec4.png";
import btnImg5 from "../images/rec5.png";
import btnImg6 from "../images/rec6.png";
import {
  BrowserView,
  CustomView,
  deviceType,
  MobileOnlyView,
} from "react-device-detect";

const RecrServices = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh ",
        marginTop: "-5px",
      }}
    >
      <Navbar nav_txt_col="black" btn_color="#FFC600" nav_drop_color="black" />
      <BrowserView>
        <div className="row">
          <div className="col md-1">
            <Imgrecrbtn
              img_url={btnImg1}
              img_label="Dedicated Recruiter Model (DRM)"
              pglocation="DRM"
            />
            <Imgrecrbtn
              img_url={btnImg2}
              img_label="Pay Per Hire"
              pglocation="payperhire"
            />
            <Imgrecrbtn
              img_url={btnImg3}
              img_label="Leadership Hiring"
              pglocation="leadershiphiring"
            />
          </div>
          <div
            className="col md-6"
            style={{ marginTop: "4vw", marginLeft: "5vw" }}
          >
            <h1
              style={{ color: "black", alignItems: "center" }}
              className="ml-12 text-3xl font-bold"
            >
              RECRUITMENT SERVICES
            </h1>
            <br />
            <p
              style={{
                color: "black",
                fontSize: "1.5em",
                maxWidth: "30vw",
                lineHeight: "2em",
              }}
            >
              Jobs Territory inculcates technology-driven recruiting services.
              Through our huge database, we allocate the most suitable
              candidates. This works best with both startups and large-scale
              businesses.
            </p>
            <br />
            <p
              style={{
                color: "black",
                fontSize: "1.5em",
                maxWidth: "30vw",
                lineHeight: "2em",
              }}
            >
              We are a one-stop for filling an organisation's ongoing need for
              talented and skilled employees throughout the project cycle.
            </p>
            <br />
            <p
              style={{
                color: "black",
                fontSize: "1.5em",
                maxWidth: "30vw",
                lineHeight: "2em",
              }}
            >
              JT’s application-based, outsourcing and HR solutions are
              complemented by unmatched service and support. Thence, allowing
              employers to manage recruitment, training, payroll, and payments
              from a single tool.
            </p>
          </div>
          <div className="col md-1">
            <Imgrecrbtn
              img_url={btnImg4}
              img_label="Blue-Collar Employee Hiring"
              pglocation="BCEH"
            />
            <Imgrecrbtn
              img_url={btnImg5}
              img_label="Part Time"
              pglocation="parttime"
            />
            <Imgrecrbtn
              img_url={btnImg6}
              img_label="Gig/Contract Hiring"
              pglocation="contracthiring"
            />
          </div>
        </div>
      </BrowserView>
      <MobileOnlyView>
        <h3 className="recservHeadingM">RECRUITMENT SERVICES</h3>
        <p className="recservParaM">
          Jobs territory inculcates technology-driven recruiting services.
          Through our huge database, we allocate the most suitable candidates.
          This works best with both startups and large scale businesses. We are
          a one-stop for filling an organisation's ongoing need for talented and
          skilled employees throughout the project cycle.JT’s application-based,
          outsourcing and HR solutions are complemented by unmatched service and
          support. Thence, allowing employers to manage recruitment, training,
          payroll, and payments from a single tool.
        </p>
        <div className="col" style={{ padding: "5vw" }}>
          <div className="row">
            <Imgrecrbtn
              img_url={btnImg1}
              img_label="Dedicated Recruiter Model (DRM)"
              pglocation="DRM"
            />
            <Imgrecrbtn
              img_url={btnImg2}
              img_label="Pay Per Hire"
              pglocation="payperhire"
            />
            <Imgrecrbtn
              img_url={btnImg3}
              img_label="Leadership Hiring"
              pglocation="leadershiphiring"
            />
          </div>
          <div className="row">
            <Imgrecrbtn
              img_url={btnImg4}
              img_label="Blue-Collar Employee Hiring"
              pglocation="BCEH"
            />
            <Imgrecrbtn
              img_url={btnImg5}
              img_label="Part Time"
              pglocation="parttime"
            />
            <Imgrecrbtn
              img_url={btnImg6}
              img_label="Gig/Contract Hiring"
              pglocation="contracthiring"
            />
          </div>
        </div>
      </MobileOnlyView>
      <CustomView condition={deviceType === "tablet"}>
        <div className="">
          <h1 className="mt-5 text-3xl font-bold text-center ">
            RECRUITMENT SERVICES
          </h1>
          <div className="flex">
            <div className="flex flex-col items-center mt-10 space-y-52">
              <div className="flex flex-col items-center">
                <Imgrecrbtn
                  img_url={btnImg1}
                  // img_label="Dedicated Recruiter Model (DRM)"
                  pglocation="DRM"
                />
                <h1 className="mt-2 font-bold text-center ml-7 ">
                  Dedicated <br /> Recruiter Model <br /> (DRM)
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <Imgrecrbtn
                  img_url={btnImg2}
                  // img_label="Pay Per Hire"
                  pglocation="payperhire"
                />
                <h1 className="mt-2 font-bold text-center ml-7 ">
                  Pay Per Hire
                </h1>
              </div>
              <div>
                <Imgrecrbtn
                  img_url={btnImg3}
                  // img_label="Leadership Hiring"
                  pglocation="leadershiphiring"
                />
                <h1 className="mt-2 font-bold text-center ml-7 ">
                  Leadership <br /> Hiring
                </h1>
              </div>
            </div>
            <div
              className="col md-6"
              style={{ marginTop: "4vw", marginLeft: "5vw" }}
            >
              <br />
              <p
                style={{
                  color: "black",
                  fontSize: "1.5em",
                  maxWidth: "40vw",
                }}
              >
                Jobs Territory inculcates technology-driven recruiting services.
                Through our huge database, we allocate the most suitable
                candidates. This works best with both startups and large-scale
                businesses.
              </p>
              <br />
              <p
                style={{
                  color: "black",
                  fontSize: "1.5em",
                  maxWidth: "40vw",
                }}
              >
                We are a one-stop for filling an organisation's ongoing need for
                talented and skilled employees throughout the project cycle.
              </p>
              <br />
              <p
                style={{
                  color: "black",
                  fontSize: "1.5em",
                  maxWidth: "40vw",
                }}
              >
                JT’s application-based, outsourcing and HR solutions are
                complemented by unmatched service and support. Thence, allowing
                employers to manage recruitment, training, payroll, and payments
                from a single tool.
              </p>
            </div>
            <div className="flex flex-col mt-10 space-y-52">
              <div className="flex flex-col items-center">
                <Imgrecrbtn
                  img_url={btnImg4}
                  // img_label="Blue-Collar Employee Hiring"
                  pglocation="BCEH"
                />
                <h1 className="mt-2 font-bold text-center ml-7 ">
                  Blue-Collar <br /> Employee Hiring
                </h1>
              </div>
              <div className="flex flex-col items-center pt-2">
                <Imgrecrbtn
                  img_url={btnImg5}
                  // img_label="Part Time"
                  pglocation="parttime"
                />
                <h1 className="mt-2 font-bold text-center ml-7 ">Part Time </h1>
              </div>
              <div className="flex flex-col items-center">
                <Imgrecrbtn
                  img_url={btnImg6}
                  // img_label="Gig/Contract Hiring"
                  pglocation="contracthiring"
                />
                <h1 className="mt-2 font-bold text-center ml-7 ">
                  Gig/Contract <br /> Hiring
                </h1>
              </div>
            </div>
          </div>
        </div>
      </CustomView>
    </div>
  );
};

export default RecrServices;
