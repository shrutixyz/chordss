
import VoxeetSDK from "@voxeet/voxeet-web-sdk"
import React, {useState, useEffect} from "react";
import endCall from '../images/call-end.svg'
import {BiCopy, BiShareAlt} from 'react-icons/bi'
import Curtain from "../components/curtain";
import Instruments from "./instruments";
import LolPiano from "../components/lolpiano";
import LolDrum from "../components/lol_drum";
function Meeting ({user, participantList, cfname ,leaveroom}){
  
  var details = `Hey, join us at this amazing jam session '${cfname}' happening right now at https://chordzz.web.app`

  function copy(){
    navigator.clipboard.writeText(details)
    document.getElementById("copytext").innerHTML="copied details to clipboard!"
    setTimeout(function(){
      document.getElementById("copytext").innerHTML=""
    },3000);
  }


  return(
    <div className="m-6">
      <div className="flex justify-between ">
        <h1>{cfname}</h1>
        <div className="flex" >
          <h1 className="px-3" id="copytext"></h1>
        <BiShareAlt onClick={() =>  copy()} className="h-8 w-8"/>
        </div>
      </div>
      <br />
      {console.log(participantList)}
      <div className="flex justify-between flex-col-reverse md:flex-row  gap-12">
        <div className="bg-greyish h-nv w-1/1 md:w-1/3">
          {participantList.map(item => {
            return <h1>{item}</h1>
          })}
        </div>
        <div className="bg-greyish w-1/1 md:w-2/3 h-nv">
          {/* <Curtain/> */}
          <Instruments/>
          {/* <LolPiano/> */}
          {/* <Instruments/> */}
          {/* <LolPiano/> */}
          {/* <LolDrum/> */}
        </div>
      </div>
      <br />
      <div className="flex justify-between ">
        <h3>attendees</h3>
        <img src={endCall} alt="" className="h-10" onClick={() => leaveroom()}/>
      </div>
    
    </div>
  )
    
   
    
}





export default Meeting;