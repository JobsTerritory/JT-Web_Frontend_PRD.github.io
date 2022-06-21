import React, { useState, useEffect } from "react";
// import '../App.css'
import "./Carousel.css";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { BrowserView, MobileView,MobileOnlyView,CustomView,isTablet } from "react-device-detect";
import ReadMore from "../../ReadMore";
import logo from '../../../images/jobsTerritoryLogo.png';

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
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-9">
                        <img
                          src={item.imageUrl}
                          alt="First slide"
                          className=" z-[3] mb-2 rounded-full w-36 h-36"
                        />
                      </div>
                      <div className="col-lg-3">
                        <img
                          src={logo}
                          alt="First slide"
                          className=" z-[3] mb-2 w-36 h-36"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4" style={{ fontSize: "1.2em", color: 'white' }}>
                    {item.review.length > 180 ? (
                      <ReadMore review={item.review} />
                    ) : (
                      item.review
                    )}
                  </div>
                  <div className="flex flex-col self-end">
                    <h3 className="self-end text-2xl font-bold" style={{ color: 'white' }}>{item.name}</h3>
                    <h3 className="self-end text-md" style={{ color: 'white' }}>{`${item.designation}`}</h3>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </BrowserView>
      <CustomView condition={isTablet === true}>
      <Carousel
          className="px-24 py-10 rounded-lg"
          style={{
            textAlign: "center",
            backgroundColor: "#F86FA3",
            width: "100%",
            padding: "5vw",
          }}
        >
          {data.map((item) => {
            return (
              <Carousel.Item className="z-[1] min-h-[400px]">
                <div className="z-0 flex flex-col items-center justify-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={item.imageUrl}
                          alt="First slide"
                          className=" z-[3] mb-2 rounded-full w-36 h-36"
                        />
                      </div>
                      <div className="col-md-3"></div>
                      <div className="col-md-auto">
                        <img
                          src={logo}
                          alt="First slide"
                          className=" z-[3] mb-2 w-36 h-36"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4" style={{ fontSize: "1.2em", color: 'white' }}>
                    {item.review.length > 180 ? (
                      <ReadMore review={item.review} />
                    ) : (
                      item.review
                    )}
                  </div>
                  <div className="flex flex-col self-end">
                    <h3 className="self-end text-2xl font-bold" style={{ color: 'white' }}>{item.name}</h3>
                    <h3 className="self-end text-md" style={{ color: 'white' }}>{`${item.designation}`}</h3>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </CustomView>
      <MobileOnlyView>
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
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <img
                        src={item.imageUrl}
                        alt="First slide"
                        className="carouselImage"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col" style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <span>
                        <h3 style={{ color: 'white' }} className="font-bold text-2xl">{item.name}</h3>
                        <h3 style={{ color: 'white' }} className="text-sm">{item.designation}</h3>
                      </span>
                    </div>
                  </div>
                </div>
                <br />
                <p className="review"> {item.review.length > 180 ? (
                      <ReadMore review={item.review} />
                    ) : (
                      item.review
                    )}</p>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </MobileOnlyView>
    </div>
  );
};

export default TestCarousel;
