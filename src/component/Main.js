import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import App from "../App";
import CartMain from "./CartMain";
import Header from "./Header";
import Login from "./Login";
import ProductCategoriesDetails from "./ProductCategoriesDetails";
import ProductOrderDetailsPage from "./ProductOrderDetailsPage";
const Main = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login/:name" component={Login} />
        <Route
          exact
          path="/productDetails/:name"
          component={ProductCategoriesDetails}
        />
        <Route
          exact
          path="/productOrderDetails/:productId"
          component={ProductOrderDetailsPage}
        />
        <Route exact path="/viewCart/" component={CartMain} />
      </Switch>
    </Router>
  );
};

export default Main;
