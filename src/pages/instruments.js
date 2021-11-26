import Drum from "../components/drum";
import Guitar from "../components/guitar";
import NavBar from "../components/Navbar";
import Piano from "../components/piano";
import {signInWithEmailAndPassword, registerWithEmailAndPassword, logout} from '../components/utils/firebase';
function Instruments ({user}){
    return (
        <>
        <NavBar user={user}/>
        <center>
        <button className="border-2  p-2 w-40 mb-3 rounded-lg border-yellow-400"  onClick={() => logout()}>testing</button>
        <p>drum</p>
        <Drum/>
        <br/>
        <p>Piano</p>
        <Piano/>
        <br/>
        <p>Guitar</p>
        <Guitar/>
        <br/>
        </center>

        </>
    )
}

export default Instruments;



