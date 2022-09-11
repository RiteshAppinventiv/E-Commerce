import React from 'react'
import { Route, useHistory } from "react-router-dom";
import PopularProduct from './PopularProduct';
import { useParams } from "react-router-dom";


const Login = ({ match }) => {
    const history = useHistory();
    document.title="Login Page"
    const { name } = useParams();
  return (
    <div>
        <center>
            <h1>WELCOME TO LOGIN PAGE</h1>
            <h3>Mr. {name}</h3>
        <button onClick={()=>{history.push('/')}}>Home</button>
        </center>
    </div>
  )
}

export default Login