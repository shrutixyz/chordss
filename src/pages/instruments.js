import { Link } from "react-router-dom";
import Drum from "../components/drum";
import Guitar from "../components/guitar";
import LolPiano from "../components/lolpiano";
import LolDrum from "../components/lol_drum";
import NavBar from "../components/Navbar";
import NavConf from "../components/NavConf";
import { useState } from "react";
import Logo from '../images/chordz.svg'
import Piano from "../components/piano";
import {signInWithEmailAndPassword, registerWithEmailAndPassword, logout} from '../components/utils/firebase';

// var check1 = "one";
// var check2 = "two"
function Instruments ({user}){
    const [check2, setcheck2] = useState("two");
const [check1, setcheck1] = useState("one");
const [count, setCount] = useState(0);
    return (

        <>
        
          <div class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">

  <img src={Logo} className="w-12"/>

    <span class="font-semibold text-xl tracking-tight">chordz</span>
 
  </div>
  <div class="block lg:hidden">
  </div>
  <div class="w-full flex-between lg:flex block  lg:items-center lg:w-auto">
    
    <div>

   <div className="flex gap-3">
        
   <p  onClick={() => setCount(1)} class="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Pick Drum</p>
   <p onClick={() => setCount(0)}  class="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Pick Piano</p>

 
 
 

      </div>
      
    
  
    </div>
  </div>
</div>
        <center>
        {count==0?<LolPiano/>  : <LolDrum/> }
        {/* <LolPiano/> */}

        
        </center>

        </>
    )
   }




export default Instruments;



