import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import ReadMore from "./ReadMore";

const TestimonialCar = () => {
  const [data, setdata] = useState([]);
  const testData = async () => {
    const getdata = await axios.get(
      "https://jobsterritorybackend.herokuapp.com/clientTestimonials"
    );
    setdata(getdata.data);
  };
  useEffect(() => {
    testData();
  }, []);
  return (
    <div style={{ marginTop: "2vw", marginBottom: "2vw", textAlign: "center" }}>
      <h1
        className="mb-10 text-3xl fontlink"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Client Testimonials
      </h1>
      <BrowserView>
        <Carousel
          className="px-[5vw] py-10 rounded-lg"
          style={{
            backgroundColor: "#FFD600",
            left: "25%",
            width: "50%",
            // borderRadius: "0px 232px 0px 194px",
          }}
        >
          {data.map((item) => {
            return (
              <Carousel.Item className="z-[1] min-h-[350px]">
                <div className="z-0 flex flex-col items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt="First slide"
                    className=" z-[3] mb-2 rounded-full w-36 h-36"
                  />
                  <div className="mt-4" style={{ fontSize: "1.2em" }}>
                    {item.review.length > 180 ? (
                      <ReadMore review={item.review} />
                    ) : (
                      item.review
                    )}
                  </div>
                  <div className="flex flex-col self-end">
                    <h3 className="self-end text-xl">{item.name}</h3>
                    <h3 className="self-end text-lg">{`${item.designation}, ${item.company}`}</h3>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </BrowserView>

      <MobileView>
        <Carousel
          style={{ backgroundColor: "#FFD600", width: "100%", padding: "5vw" }}
        >
          {data.map((item) => {
            return (
              <Carousel.Item>
                <img
                  src={item.imageUrl}
                  alt="First slide"
                  width="150vw"
                  height="150vw"
                  style={{ borderRadius: "50%" }}
                />
                <h4>{item.company}</h4>
                <h3 className="fontlink">{item.name}</h3>
                <h4>{item.designation}</h4>
                <p style={{ fontSize: "1.5em" }}>{item.review}</p>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </MobileView>
    </div>
  );
};

export default TestimonialCar;
