import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import bgImg from "../images/clientsbg.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class Clients extends Component {
  constructor() {
    super();
    this.state = {
      logos: this.logos,
      name: this.name,
    };
  }

  async componentDidMount() {
    let url = "https://jobsterritorybackend.herokuapp.com/clientLogos";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData.clientLogo);
    this.setState({ logos: parsedData });
    console.log(this.state.logos);

    const logos = this.state.logos.map((element) => {
      return <img src={element.clientLogo} alt="" />;
    });

    console.log(logos);
  }

  render() {
    var idx = -10,
      end = 0;

    return (
      <div style={{ backgroundImage: `url(${bgImg})`, padding: "5vw" }}>
        <AliceCarousel mouseTracking />
      </div>
    );

    // return (
    //   <div style={{ backgroundImage: `url(${bgImg})`, padding: "5vw" }}>
    //     <h1 className="pb-5 ClientHeading">OUR CLIENTS</h1>
    //     <div>
    //       <Carousel>
    //         {this.state.logos?.slice(0, 5)?.map((element, index) => {
    //           idx = idx + 10;
    //           end = idx + 10;
    //           return (
    //             <Carousel.Item className=" ClientCar" interval={1000}>
    //               {this.state.logos.slice(idx, end)?.map((element, i) => {
    //                 return (
    //                   <img
    //                     className="Carousel-img"
    //                     src={element.clientLogo}
    //                     alt=""
    //                   />
    //                 );
    //               })}
    //             </Carousel.Item>
    //           );
    //         })}
    //       </Carousel>
    //     </div>
    //   </div>
    // );
  }
}
