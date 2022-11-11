import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import LoginFormInput from "./LoginFormInput";
import OtpComponent from "./OtpComponent";
import axios from "axios";
import { serverHost } from "../environment";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySucess } from "../context/notificationContext";

const Login = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOtpScreen, setIsOtpScreen] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "email is required",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 3-20 characters and include atleast 1 letter, 1  number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit event");

    let data = {
      email: values["email"],
      password: values["password"],
    };

    axios
      .post(`${serverHost}/user/login`, data)
      .then((res) => {
        console.log("ressssss", res);
        if (res.data.statusCode === 200) {
          notifySucess(res.data.message);
          const token = window.localStorage.setItem("token", res.data.token);
          props.setIsOpen(false);
        } else if (res.data.statusCode === 201) {
          setIsOtpScreen(true);
          notifyError(res.data.message);
        } else if (res.data.message) {
          notifyError(res.data.message);
        } else {
          notifySucess("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err.message);
        props.setIsOpen(false);
        notifyError(err.message);
      });
  };

  return isSignUp ? (
    <SignUp setIsOpen={props.setIsOpen} />
  ) : isOtpScreen ? (
    <OtpComponent email={values["email"]} setIsOpen={props.setIsOpen} />
  ) : (
    <section className="vh-80" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-70">
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          // style={{ backgroundColor: "red" }}
        >
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{
                      borderRadius: "1rem 0 0 1rem",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        >
                          <img
                            src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
                            alt="img"
                            style={{ height: "50px" }}
                          />
                        </i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      {inputs.map((input) => (
                        <LoginFormInput
                          key={input.id}
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                        />
                      ))}

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a
                          style={{ color: "#393f81" }}
                          onClick={() => {
                            setIsSignUp((isSignUp) => !isSignUp);
                          }}
                        >
                          Register here
                        </a>
                      </p>
                      <a href="/" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
