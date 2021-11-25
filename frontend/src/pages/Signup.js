import NavBar from "../components/Navbar";
import IntroImage  from "../components/introimage";
import { Link } from "react-router-dom";
import {registerWithEmailAndPassword} from '../components/utils/firebase';
function Signup(){

    return (
        <>
        <NavBar/>
        <div className="flex justify-around flex-col md:flex-row items-center mt-10">
        <div className="flex-initial "><IntroImage/>
        </div>
        <div className="flex-initial h-30 w-50 bg-transparent">
            <h1 className="text-5xl">Signup</h1>
            <br/>
            <p className="text-2xl">hey, create an account on chords!</p>
            <br/>
            <div class="w-full max-w-xs">
  <form >
    <div class="mb-4">
      <label class="block  text-sm font-bold mb-2" for="username">
        Email Address
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3  border-yellow-400 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address"/>
    </div>
    <div class="mb-6">
      <label class="block  text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-yellow-400 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="password" type="password" placeholder="******************"/>
     
    </div>
    
  </form>
</div>
            <div className="flex justify-between">
          
            <button className="border-2  p-2 w-40 mb-3 rounded-lg border-yellow-400" onClick={() => registerWithEmailAndPassword(document.getElementById('username').value, document.getElementById('password').value)}>signup</button>
           
            <br/>
            
             </div>
             
             
<center> <Link to="/login">
<p>or login</p>
            </Link></center>
        </div>
        

      </div>
        </>
    )
}

export default Signup;