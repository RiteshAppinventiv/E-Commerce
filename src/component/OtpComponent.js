import React from "react";
import "./OtpComponentStyles.css";
import { serverHost } from "../environment";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyError } from "../context/notificationContext";

const OtpComponent = ({ email, setIsOpen }) => {
  const notifySucess = (msg) => toast.success(`${msg}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  
  const clickEvent = (event, last) => {
    if (event.target.value) {
      document.getElementById(last).focus();
    }
  };

  const confirmOtp = () => {
    let inputOtp = "";
    inputOtp =
      document.getElementById("1st").value +
      document.getElementById("sec").value +
      document.getElementById("third").value +
      document.getElementById("fourth").value;
    console.log("entered email: " + email);
    console.log("entered input otp: " + inputOtp);

    let data = {
      email: email,
      otp: inputOtp,
    };

    axios.post(`${serverHost}/user/otpVerify`, data).then((res) => {
      console.log("ressssss", res);
      const token = window.localStorage.setItem("token", res.data.token);

      console.log("login sucessfully............",res.data)
      if (res.data.statusCode === 200) {
        notifySucess(res.data.message);
        setIsOpen(false);
      } else {
        if (res.data.error) {
          notifyError(res.data.error);
        } else if (res.data.message) {
          notifyError(res.data.message);
        } else {
          // addToast("Something went wrong", {
          //   appearance: "error",
          //   autoDismiss: true,
          // });
        }
        // if(res.data.message.length > 0){
        //   addToast(res.data.message, {
        //     appearance: 'error',
        //     autoDismiss: true,
        //   })
        // }
        // else{
        //   addToast(res.data.error, {
        //     appearance: 'error',
        //     autoDismiss: true,
        //   })
        // }
      }
    });

    // fetch(`${serverHost}/user/otpVerify`, {
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     console.log(response.token);
    //     console.log("before function calsed----------");
    //     setIsOpen(false);
    //     console.log("after function calsed----------");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <div className="otpContainer">
      <h1 id="h1">Enter OTP</h1>
      <div className="userInput">
        <input
          className="otp-input"
          id="1st"
          type="text"
          maxLength="1"
          onKeyUp={(e) => clickEvent(e, "sec")}
        />
        <input
          className="otp-input"
          id="sec"
          type="text"
          maxLength="1"
          onKeyUp={(e) => clickEvent(e, "third")}
        />
        <input
          className="otp-input"
          id="third"
          type="text"
          maxLength="1"
          onKeyUp={(e) => clickEvent(e, "fourth")}
        />
        <input className="otp-input" id="fourth" type="text" maxLength="1" />
      </div>
      <button className="cnf-btn" onClick={confirmOtp}>
        CONFIRM
      </button>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default OtpComponent;
