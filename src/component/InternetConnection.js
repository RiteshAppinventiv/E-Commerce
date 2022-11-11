import React from 'react'
import { Detector } from 'react-detect-offline'
import "./InternetConnectionStyle.css"
const noInternet=require("./noInternet.png")

const InternetConnection = (props) => {
  return (
        <>
        <Detector
            render={({online})=>(
                online?props.children:<div className='internet'>
                    <div className='internet-comp'>
                        <img className='logo'src={noInternet} alt="images" />
                        <p>Check Yout Internet Connections</p>
                    </div>
                </div>
            )}
        />
        </>
  )
}

export default InternetConnection