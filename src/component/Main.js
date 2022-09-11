import React from "react";
import {BrowserRouter as Router, Route,Switch, Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import ProductCategoriesDetails from "./ProductCategoriesDetails";
import ProductOrderDetailsPage from "./ProductOrderDetailsPage";
const Main = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/login/:name" component={Login}/>
            <Route exact path="/productDetails/:name" component={ProductCategoriesDetails}/>
            <Route exact path="/productOrderDetails/:name" component={ProductOrderDetailsPage}/>
        </Switch>
      </Router>
  );
};

export default Main;
