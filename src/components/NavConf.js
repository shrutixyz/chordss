import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.scss';
import {auth} from './utils/firebase';
import firebase  from '@firebase/app-compat';
import Logo from '../images/chordz.svg'
function NavConf({user}){

  const history = useNavigate();
  console.log(user)
  const handleLogOut = () => {
    auth.signOut();
    history('/')
  }

  var showhide = "hidden"
  var url = "https://cdn.discordapp.com/attachments/873911460055642152/914428700500578314/unknown.png"
if(user!=null){
   url = "https://firebasestorage.googleapis.com/v0/b/chordzz.appspot.com/o/pfp%2F"+user.email.split("@")[0]+"%40"+user.email.split("@")[1]+".png?alt=media";
}
  // var url = "https://firebasestorage.googleapis.com/v0/b/chordzz.appspot.com/o/pfp%2F"+user.email.split("@")[0]+"%40"+user.email.split("@")[1]+".png?alt=media";
  var show = "login"

    return (
        <div class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">

  <img src={Logo} className="w-12"/>

    <span class="font-semibold text-xl tracking-tight">chordz</span>
 
  </div>
  <div class="block lg:hidden">
    {/* <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button> */}
  </div>
  <div class="w-full flex-between lg:flex block  lg:items-center lg:w-auto">
    
    <div>

   <div className="flex gap-3">
        
   <button  class="inline-block text-sm px-4 mr-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Pick</button>
   
        
   <Link to="/conference">
   <p  class="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Drop Drum</p>
   
   </Link>
      </div>
      
    
  
    </div>
  </div>
</div>
    )

}

export default NavConf