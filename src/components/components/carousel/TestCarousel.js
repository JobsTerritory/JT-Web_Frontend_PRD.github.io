import React, { useState, useEffect } from "react";
// import '../App.css'
import "./Carousel.css";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import ReadMore from "../../ReadMore";

const TestCarousel = () => {
  const [data, setdata] = useState([]);
  const testData = async () => {
    const getdata = await axios.get(
      "https://jobsterritorybackend.herokuapp.com/teamTestimonials"
    );
    setdata(getdata.data);
  };
  useEffect(() => {
    testData();
    console.log(data);
  }, []);
  return (
    <div className="pb-5">
      <p className="p-2 thd">Team Testimonials</p>
      <BrowserView>
        <Carousel
          className="px-24 py-10 rounded-lg"
          style={{
            textAlign: "center",
            backgroundColor: "#F86FA3",
            left: "25%",
            width: "50%",
          }}
        >
          {data.map((item) => {
            return (
              <Carousel.Item className="z-[1] min-h-[400px]">
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
                    <h3 className="self-end text-lg">{`${item.designation}`}</h3>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </BrowserView>
      <MobileView>
        <Carousel
          style={{
            textAlign: "center",
            backgroundColor: "#F86FA3",
            width: "100%",
            padding: "5vw",
          }}
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
                <h3>{item.name}</h3>
                <h3>{item.designation}</h3>
                <p style={{ fontSize: "1.5em" }}>{item.review}</p>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </MobileView>
    </div>
  );
};

export default TestCarousel;
