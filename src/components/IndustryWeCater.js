import { Button } from "bootstrap";
import React, { useState } from "react";
import CompaniesIWC from "./CompaniesIWC";
import ibtn1 from "../images/ecommerce.png";
import ibtn2 from "../images/retail.png";
import ibtn3 from "../images/fmgc.png";
import ibtn4 from "../images/hospitality.png";
import ibtn5 from "../images/learning.png";
import ibtn6 from "../images/fashion.png";
import ibtn7 from "../images/banking.png";
import ibtn8 from "../images/bpo.png";
import Clients from "./Clients";

const IndustryWeCater = () => {
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(true);
  const [btn3, setbtn3] = useState(true);
  const [btn4, setbtn4] = useState(true);
  const [btn5, setbtn5] = useState(true);
  const [btn6, setbtn6] = useState(true);
  const [btn7, setbtn7] = useState(true);
  const [btn8, setbtn8] = useState(true);
  const [txt1, settxt1] = useState(true);

  const handlebtn1 = () => {
    setbtn2(!btn2);
    setbtn3(!btn3);
    setbtn4(!btn4);
    setbtn5(!btn5);
    setbtn6(!btn6);
    setbtn7(!btn7);
    setbtn8(!btn8);
    settxt1(!txt1);
  };
  const handlebtn2 = () => {
    setbtn1(!btn1);
    setbtn3(!btn3);
    setbtn4(!btn4);
    setbtn5(!btn5);
    setbtn6(!btn6);
    setbtn7(!btn7);
    setbtn8(!btn8);
    settxt1(!txt1);
  };
  const handlebtn3 = () => {
    setbtn1(!btn1);
    setbtn2(!btn2);
    setbtn4(!btn4);
    setbtn5(!btn5);
    setbtn6(!btn6);
    setbtn7(!btn7);
    setbtn8(!btn8);
    settxt1(!txt1);
  };
  const handlebtn4 = () => {
    setbtn2(!btn2);
    setbtn3(!btn3);
    setbtn1(!btn1);
    setbtn5(!btn5);
    setbtn6(!btn6);
    setbtn7(!btn7);
    setbtn8(!btn8);
    settxt1(!txt1);
  };
  const handlebtn5 = () => {
    setbtn2(!btn2);
    setbtn3(!btn3);
    setbtn4(!btn4);
    setbtn1(!btn1);
    setbtn6(!btn6);
    setbtn7(!btn7);
    setbtn8(!btn8);
    settxt1(!txt1);
  };
  const handlebtn6 = () => {
    setbtn2(!btn2);
    setbtn3(!btn3);
    setbtn4(!btn4);
    setbtn5(!btn5);
    setbtn1(!btn1);
    setbtn7(!btn7);
    setbtn8(!btn8);
    settxt1(!txt1);
  };
  const handlebtn7 = () => {
    setbtn2(!btn2);
    setbtn3(!btn3);
    setbtn4(!btn4);
    setbtn5(!btn5);
    setbtn6(!btn6);
    setbtn1(!btn1);
    setbtn8(!btn8);
    settxt1(!txt1);
  };
  const handlebtn8 = () => {
    setbtn2(!btn2);
    setbtn3(!btn3);
    setbtn4(!btn4);
    setbtn5(!btn5);
    setbtn6(!btn6);
    setbtn7(!btn7);
    setbtn1(!btn1);
    settxt1(!txt1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="rounded-lg ind-we-cater-to-outerdiv">
        <div className="ml-2 row align-items-start ">
          <div className="col">
            {btn1 ? (
              <div>
                <button className="internalbtn btn" onClick={handlebtn1}>
                  <img className="imginbtn" src={ibtn1} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">E-Commerce</h2>
              </div>
            ) : null}
          </div>
          <div className="col">
            {btn2 ? (
              <div>
                <button className="internalbtn btn" onClick={handlebtn2}>
                  <img className="imginbtn" src={ibtn2} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">Healthcare</h2>
              </div>
            ) : null}
          </div>
          <div className="col">
            {btn3 ? (
              <div>
                <button className="internalbtn btn" onClick={handlebtn3}>
                  <img className="imginbtn" src={ibtn3} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">FMCG</h2>
              </div>
            ) : null}
          </div>
          <div className="col">
            {btn4 ? (
              <div>
                <button className="internalbtn btn" onClick={handlebtn4}>
                  <img className="imginbtn " src={ibtn4} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">Hospitality</h2>
              </div>
            ) : null}
          </div>

          <div>
            {txt1 ? (
              <p className="ind-we-cater fontLink">Industries we cater to</p>
            ) : null}
          </div>
          <div style={{ marginLeft: "-3vw" }}>
            {" "}
            {!txt1 ? <CompaniesIWC /> : null}
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">
            {btn5 ? (
              <div>
                <button className="internalbtn2 btn" onClick={handlebtn5}>
                  <img className="imginbtn" src={ibtn5} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">E-Learning</h2>
              </div>
            ) : null}
          </div>
          <div className="col">
            {btn6 ? (
              <div>
                <button className="internalbtn2 btn" onClick={handlebtn6}>
                  <img className="imginbtn" src={ibtn6} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">
                  Fashion and Apparel
                </h2>
              </div>
            ) : null}
          </div>
          <div className="col">
            {btn7 ? (
              <div>
                <button className="internalbtn2 btn" onClick={handlebtn7}>
                  <img className="imginbtn" src={ibtn7} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">
                  Banking and Insurance
                </h2>
              </div>
            ) : null}
          </div>
          <div className="col">
            {btn8 ? (
              <div>
                <button className="internalbtn2 btn" onClick={handlebtn8}>
                  <img className="imginbtn" src={ibtn8} alt="" />
                </button>
                <h2 className="fontlink internal-btn-txt">BPO-KPO</h2>
              </div>
            ) : null}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryWeCater;
