import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./component/Main";
import { ToastContainer} from "react-toastify";
import InternetConnection from "./component/InternetConnection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InternetConnection>
      <Main />
      <ToastContainer />
    </InternetConnection>
  </React.StrictMode>
);
