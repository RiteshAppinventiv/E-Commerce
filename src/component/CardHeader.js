import React from "react";
import "./TopDealsStyles.css"
import { Route, useHistory } from "react-router-dom";

const CardHeader = ({title}) => {
  const history = useHistory();
  return (
    <div>
      <div className="deal-header">
        <h5>{title}</h5>
        <div onClick={()=>{history.push(`/productDetails/all`)}} className="view-all" style={{"cursor":"pointer"}}>VIEW ALL</div>
      </div>
      <hr />
    </div>
  );
};

export default CardHeader;
