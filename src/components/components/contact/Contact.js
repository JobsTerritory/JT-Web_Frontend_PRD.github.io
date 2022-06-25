import React, { useRef, useState } from "react";
import "./Contact.css";
import Quiz from "../quiz/Quiz";
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OTPInput from "otp-input-react";
import { authhelper } from "../../../firebase-config";

const Contact = () => {
  const [visibilty, setvisibility] = useState(true);
  const [data, setdata] = useState({});
  const [enabled, setEnabled] = useState(true);
  const [OTP, setOTP] = useState("");
  const [visible, setVisible] = useState(false);
  const [OTPVisible, setOTPVisible] = useState(false);

  const phoneRef = useRef();

  const handlechange = (e) => {
    // console.log(e.target.name);

    const newdata = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setdata(newdata);
    console.log(data);
  };

  const generateRecaptchaVerifier = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      authhelper
    );
  };

  const getOTP = (e) => {
    if (phoneRef.current.value.length === 10) {
      let phoneNumber = "+91" + phoneRef.current.value;
      console.log(phoneNumber);
      generateRecaptchaVerifier();
      let appVerifier = window.recaptchaVerifier;
      setVisible(true);
      setOTPVisible(true);
      signInWithPhoneNumber(authhelper, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setEnabled(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyOTP = () => {
    if (OTP.length === 6) {
      window.confirmationResult
        .confirm(OTP)
        .then((result) => {
          setVisible(false);
          setEnabled(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  if (visibilty) {
    return (
      <main className="form-signin">
        <p className=" h">Let's Connect</p>
        <div className="card" style={{ backgroundColor: "#FFE6F4" }}>
          {/* <div className="card-body"> */}
          <form
            autoComplete="off"
            onSubmit={() => {
              axios.post(
                "https://jobsterritorybackend.herokuapp.com/contactUs",
                data
              );
              setvisibility(false);
            }}
          >
            <div className="flex mb-4 space-x-3">
              <input
                type="text"
                name="fname"
                className=" outline-none p-[5px] mb-[1vw] w-full "
                placeholder="First name"
                onChange={handlechange}
                required
              />
              <input
                type="text"
                name="lname"
                className=" outline-none p-[5px] mb-[1vw] w-full "
                placeholder="Last name"
                onChange={handlechange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="inputs "
                placeholder="Your email"
                onChange={handlechange}
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <input
                type="numeric"
                ref={phoneRef}
                name="phoneNumber"
                className=" outline-none p-[5px] mb-[1vw] w-full"
                placeholder="Your phone number"
                onChange={handlechange}
                required
              ></input>
              {!OTPVisible ? (
                <button
                  type="button"
                  onClick={getOTP}
                  className="text-xs ml-3 bg-[#e9158e] px-[5px] py-[1px] mt-1 text-white disabled:bg-gray-400 rounded-md"
                >
                  Get OTP
                </button>
              ) : (
                ""
              )}
            </div>
            {visible ? (
              <div className="mb-3">
                <div className="flex justify-center pb-4">
                  <OTPInput
                    value={OTP}
                    onChange={setOTP}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    inputClassName="rounded-md outline-none border-[1px] border-gray-400 "
                    className=""
                  />
                </div>
                <button
                  type="button"
                  onClick={verifyOTP}
                  className=" text-center text-white p-2 bg-[#e9158e] rounded-md"
                >
                  Verify OTP
                </button>
              </div>
            ) : (
              ""
            )}
            <div className="mb-4 form-floating">
              <textarea
                cols="20"
                rows="5"
                name="message"
                className="inputs"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                onChange={handlechange}
                required
              ></textarea>
              {/* <label htmlFor="floatingTaxtarea2">Message</label> */}
            </div>
            <button
              className="btn-color disabled:bg-gray-400"
              type="submit"
              disabled={enabled}
            >
              Submit
            </button>
          </form>
        </div>
        <div
          id="recaptcha-container"
          className="flex items-center justify-center"
        ></div>
        {/* </div> */}
      </main>
    );
  } else {
    return <Quiz data={data} setdata={setdata} />;
  }
};

export default Contact;
