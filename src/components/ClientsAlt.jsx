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
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  const clientLogos = logos.map((logo) => {
    return (
      <div className="client-logo">
        <img
          src={logo.clientLogo}
          alt={logo.name}
          onDragStart={handleDragStart}
          role="presentation"
          className="w-40 h-40"
        />
      </div>
    );
  });

  console.log(clientLogos);

  return (
    <div style={{ backgroundImage: `url(${bgImg})`, padding: "3vw" }}>
      <h1 className="mb-8 ClientHeading">OUR CLIENTS</h1>
      <div className="p-10">
        <AliceCarousel
          mouseTracking
          items={clientLogos}
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={800}
          infinite={true}
          disableDotsControls={true}
          disableButtonsControls={true}
        />
      </div>
    </div>
  );
}

export default ClientsAlt;
