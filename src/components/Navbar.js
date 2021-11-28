  import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.scss';
import {auth} from './utils/firebase';
import firebase  from '@firebase/app-compat';
import Logo from '../images/chordz.svg'
function NavBar({user}){

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
  <Link to="/">
  <img src={Logo} className="w-12"/>
  </Link>
  <Link to="/">
    <span class="font-semibold text-xl tracking-tight">chordz</span>
    </Link>
  </div>
  <div class="block lg:hidden">
    {/* <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button> */}
  </div>
  <div class="w-full flex-grow lg:flex block  lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="https://devpost.com/software/chordz" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Demo
      </a>
      <a href="https://github.com/shrutigupta5555/chordss" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Github
      </a>
      
    </div>
    <div>

      {user? <div className="flex gap-3">
        
      <p>{user.email}   </p>
       <img src={url} className="h-8 w-8 rounded-full"/>
   <button onClick={handleLogOut}  class="inline-block text-sm px-4 mr-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Logout</button>
   
        
   <Link to="/conference">
   <p  class="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Join/Create quick session</p>
   
   </Link>
      </div> : <div>
        <Link to="/login">
   <p  class="inline-block text-sm px-4 mr-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">{show}</p>
   
   </Link>
   <Link to="/newjam">
   <p  class="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Join/Create quick session</p>
   
   </Link>
      </div> }
      
    
  
    </div>
  </div>
</div>
    )

}

export default NavBar