import React from "react";
import bgImg from "../images/clientsbg.png";
import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";

function ClientsAlt() {
  const [logos, setLogos] = React.useState([]);

  useEffect(() => {
    getLogos();
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const getLogos = async () => {
    let url = "https://jobsterritorybackend.herokuapp.com/clientLogos";
    let data = await fetch(url);
    let parsedData = await data.json();
    setLogos(parsedData);
  };

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    768: { items: 4 },
    1200: { items: 6 },
  };

  const clientLogos = logos.map((logo) => {
    return (
      <div className="client-logo">
        <img
          src={logo.clientLogo}
          alt={logo.name}
          onDragStart={handleDragStart}
          role="presentation"
          className="w-28 ml-5  "
        />
      </div>
    );
  });

  const middleIndex = Math.ceil(clientLogos.length / 2);
  const firstHalf = clientLogos.splice(0, middleIndex);
  const secondHalf = clientLogos.splice(-middleIndex);

  return (
    <div style={{ backgroundImage: `url(${bgImg})`, padding: "3vw" }}>
      <h1 className="mb-8  ClientHeading">OUR CLIENTS</h1>
      <div className="p-10 rounded-lg bg-white/20">
        <AliceCarousel
          mouseTracking
          items={firstHalf}
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={1000}
          infinite={true}
          disableDotsControls={true}
          disableButtonsControls={true}
          autoPlayStrategy={"none"}
        />
        <div className="py-4"></div>
        <AliceCarousel
          mouseTracking
          items={secondHalf}
          autoPlayDirection={"rtl"}
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={1000}
          infinite={true}
          disableDotsControls={true}
          disableButtonsControls={true}
          autoPlayStrategy={"none"}
        />
      </div>
    </div>
  );
}

export default ClientsAlt;
