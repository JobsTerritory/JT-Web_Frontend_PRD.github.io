import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { BrowserView, CustomView, deviceType } from "react-device-detect";
import ReadMore from "./ReadMore";

const clientLogo = {
  "Big Basket": "../images/bigbasket.png",
  "Nobroker": "../images/Nobroker.webp",
  "Flobiz": "../images/Flobiz.jpg"
}


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
        style={{ textAlign: "center", fontWeight: "bold", marginTop: '5vw' }}
      >
        Client Testimonials
      </h1>
      <CustomView condition={deviceType === 'browser'}>
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
                    style={{ marginRight: '31vw', height: '120px', width: '120px', top: '-100px' }}
                  />
                  <img
                    src={clientLogo[item.company]}
                    alt="Client Logo"
                    className=" z-[3] mb-2 w-36 h-36"
                    style={{ marginLeft: '30vw', height: '80px', width: '90px', top: '0px', position: 'absolute' }}
                  />
                  <div className="mt-4" style={{ fontSize: "1.2em", marginLeft: '25px', marginRight: '15px' }}>
                    {item.review.length > 180 ? (
                      <ReadMore review={item.review} />
                    ) : (
                      item.review
                    )}
                  </div>
                  <div className="flex flex-col self-end">
                    <h3 className="self-end text-xl"
                      style={{ marginTop: '40px', fontSize: '1.05rem', fontWeight: 'bold' }}
                    >{item.name}</h3>
                    <h3 className="self-end text-lg"
                      style={{ fontSize: '1.05rem', fontWeight: 'bold' }}
                    >{`${item.designation}, ${item.company}`}</h3>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </CustomView>


      <CustomView condition={deviceType === 'mobile'}>
        <div className='mobile-carousel'>
          <Carousel
            className="rounded-lg"
            style={{ backgroundColor: "#FFD600", width: "100%" }}
          >
            {data.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    src={item.imageUrl}
                    alt="First slide"
                    width="98px"
                    height="98px"
                    style={{ borderRadius: "50%" }}
                    className='client-image-mobile'
                  />
                  <div className='client-image-background' />
                  <h3 className="fontlink client-name-mobile">{item.name}</h3>
                  <p className="client-review-mobile">{item.review}</p>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </CustomView>
      <CustomView condition={deviceType === 'tablet'}>
        <Carousel
          className="rounded-lg"
          style={{ backgroundColor: "#FFD600", width: "100%" }}
        >
          {data.map((item) => {
            return (
              <Carousel.Item>
                <img
                  src={item.imageUrl}
                  alt="First slide"
                  width="98px"
                  height="98px"
                  style={{ borderRadius: "50%" }}
                  className='client-image-tablet'
                />
                <div className='client-image-background-tablet' />
                <h3 className="fontlink client-name-tablet">{item.name}</h3>
                <p className="client-review-tablet">{item.review}</p>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </CustomView>
    </div>
  );
};

export default TestimonialCar;
