import Drum from "../components/drum";
import Guitar from "../components/guitar";
import LolPiano from "../components/lolpiano";
import LolDrum from "../components/lol_drum";
import NavBar from "../components/Navbar";
import Piano from "../components/piano";
import {signInWithEmailAndPassword, registerWithEmailAndPassword, logout} from '../components/utils/firebase';
function Instruments ({user}){
   if ("lma"=="lmao"){
    return (
        <>
        <NavBar user={user}/>
        <center>
        <LolPiano />
        </center>

        </>
    )
   }
   else{
    return (
        <>
        <NavBar user={user}/>
        <center>
        <LolDrum/>
        </center>

        </>
    )
   }
}

export default Instruments;



