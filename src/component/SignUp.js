import React, { useState } from "react";
import OtpComponent from "./OtpComponent";
import SignUpFormInput from "./SignUpFormInput";
import { serverHost } from "../environment";
import axios from "axios";
import { notifyError } from "../context/notificationContext";

function SignUp(props) {
  const [isOtpSend, setIsOtpSend] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your Name",
      errorMessage: "email is required",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "email is required",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Repeat your password",
      errorMessage: "Password don't match!",
      label: "Confirm your password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit event", values);

    let data = {
      name: values["name"],
      email: values["email"],
      password: values["password"],
    };

    axios
      .post(`${serverHost}/user/signUp`, data)
      // fetch(`${serverHost}/user/signUp`,{
      //   method: 'POST',
      //   headers: {
      //     'content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })
      .then((res) => {
        console.log("signup ");
        console.log("response=== ", res);
        if (res.data.statusCode !== 200) notifyError(res.data.message);
        else setIsOtpSend(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return isOtpSend ? (
    <OtpComponent email={values["email"]} setIsOpen={props.setIsOpen} />
  ) : (
    <section className="vh-70" style={{ backgroundColor: "#eee" }}>
      <div className="container h-70">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      {inputs.map((input) => (
                        <SignUpFormInput
                          key={input.id}
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                        />
                      ))}

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample images"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
