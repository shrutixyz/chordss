
import VoxeetSDK from "@voxeet/voxeet-web-sdk"
import React, {useState, useEffect} from "react";
import endCall from '../images/call-end.svg'
import {BiCopy, BiShareAlt} from 'react-icons/bi'
import Curtain from "../components/curtain";
import Instruments from "./instruments";
import LolPiano from "../components/lolpiano";
import LolDrum from "../components/lol_drum";
function Meeting ({user, participantList, cfname ,leaveroom,listeners}){
  
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
           Listeners:
          {listeners.map(item => {
            return <h1>{item}</h1>
          })}
          
        </div>
        <div className="bg-greyish w-1/1 md:w-2/3 h-nv">
        
        <div id="video-container" className="hidden"></div>
        <div id="screenshare-container"></div>
        
          {/* <Curtain/> */}
          <Instruments/>
          {/* <LolPiano/> */}
          {/* <Instruments/> */}
          {/* <LolPiano/> */}
          {/* <LolDrum/> */}
          <div className="p-4 mt-8">
        {/* <p  class="inline-block text-sm px-4 py-2 m-4 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Mute</p>
        <p  class="inline-block text-sm px-4 py-2 m-4 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Unmute</p> */}
        {/* <p  class="inline-block text-sm px-4 py-2 m-4 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Start Sharing</p> */}
  
        </div>
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