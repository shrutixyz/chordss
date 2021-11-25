import NavBar from "../components/Navbar";
import IntroImage  from "../components/introimage";
import { Link } from "react-router-dom";
import React, {useState, setInput} from "react";
import {signInWithEmailAndPassword, registerWithEmailAndPassword, logout} from '../components/utils/firebase';
function Login({user}){
  // const [username, setUser] = useState('');
  // const [password, setPass] = useState('');
 
    return (
        <>
        <NavBar user={user}/>
        <div className="flex justify-around flex-col md:flex-row items-center mt-10">
        <div className="flex-initial "><IntroImage/>
        </div>
        <div className="flex-initial h-30 w-50 bg-transparent">
            <h1 className="text-5xl">Login</h1>
            <br/>
            <p className="text-2xl">hey, welcome back on chords yay!</p>
            <br/>
            <div class="w-full max-w-xs">
  <form >
    <div class="mb-4">
      <label class="block  text-sm font-bold mb-2" for="usernamee">
        Email Address
      </label>
      <input  class="shadow appearance-none border rounded w-full py-2 px-3  border-yellow-400 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="usernamee" type="text" placeholder="Email Address"/>
    </div>
    <div class="mb-6">
      <label class="block  text-sm font-bold mb-2" for="passwordd">
        Password
      </label>
      <input   class="shadow appearance-none border border-yellow-400 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="passwordd" type="password" placeholder="******************"/>
     
    </div>
    
    
  </form>
</div>
            <div className="flex justify-between">
          
            
            <button className="border-2  p-2 w-40 mb-3 rounded-lg border-yellow-400" onClick={() => signInWithEmailAndPassword(document.getElementById('usernamee').value, document.getElementById('passwordd').value)} >login</button>
         

            <br/>
            
             </div>
             
             
<center> <Link to="/signup">
<p>or signup</p>
            </Link></center>
        </div>
        

      </div>
        </>
    )
}
 
//  var username = document.getElementById('usernamee').value;
// var password = document.getElementById('passwordd').value;

export default Login;