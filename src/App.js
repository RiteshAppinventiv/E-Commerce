import React from "react";
import Categories from "./component/Categories";
import Header from "./component/Header";
import TopDeals from "./component/TopDeals";
import "./App.css";
import RecentlyViewed from "./component/RecentlyViewed";
import CarouselCompontnt from "./component/CarouselCompontnt";
import UsersHistory from "./component/UsersHistory";
import { useHistory } from "react-router-dom";

const App = () => {
    document.title="Home Page"
    
  return (
    <div className="App">
      {/* <button onClick={()=>{history.push('/about')}}>Go About</button> */}
      {/* <Header /> */}
      <Categories />
      <CarouselCompontnt />
      <TopDeals />
      <RecentlyViewed />
      <UsersHistory />
    </div>
  );
};

export default App;
