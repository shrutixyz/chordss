import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import Logo from '../images/drummer.svg';
import {useEffect, useState} from 'react'
import {auth} from '../components/utils/firebase';
function NewJam({user, joinroom}){
  const history = useNavigate()
    console.log(user)
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
          if(!user) {history('/'); alert("please log in")}
          
      })
  },[])

  const [conferenceAlias, setconferenceAlias] = useState("")
    return (
        <>

        <NavBar user={user}/>
     <form >
    <div className="mb-6 w-80 md:w-96 ml-10 mt-20" >
      
      <input className="shadow appearance-none border rounded w-full py-2 px-3  border-yellow-400 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="enter code" onChange={e => setconferenceAlias(e.target.value)} value={conferenceAlias} />
    </div>
   
    
  </form>

<button className=" ml-10  p-1 w-40 mb-2 rounded-lg bg-yellow-400 text-black" onClick={() => {joinroom(conferenceAlias)} }>join as attendee</button>

<p className="ml-28">or</p>
<Link to='/setstage'>

<button className="  p-1 w-40 mb-3 mt-2 ml-10 rounded-lg bg-yellow-400 text-black" >set the stage</button>

<img src={Logo} className="float-right bottom-0 fixed right-0 hidden md:block"></img>
</Link>

        </>
    )
}

export default NewJam;