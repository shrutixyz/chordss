
import VoxeetSDK from "@voxeet/voxeet-web-sdk"
import React, {useState, useEffect} from "react";
import endCall from '../images/call-end.svg'
function Meeting ({user}){



  return(
    <div className="m-6">
      <div className="flex justify-between ">
        <h1>jam name</h1>
        <h1>share</h1>
      </div>
      <br />
      <div className="flex justify-between gap-12">
        <div className="bg-greyish h-nv w-1/3"></div>
        <div className="bg-greyish w-2/3 h-nv"></div>
      </div>
      <br />
      <div className="flex justify-between ">
        <h3>attendees</h3>
        <img src={endCall} alt="" className="h-10"/>
      </div>
    
    </div>
  )
    
   
    
}





export default Meeting;