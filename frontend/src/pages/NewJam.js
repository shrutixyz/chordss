import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Logo from '../images/drummer.svg';

function NewJam(){
    return (
        <>
     <form >
    <div className="mb-6 w-80 md:w-96 ml-10 mt-20" >
      
      <input className="shadow appearance-none border rounded w-full py-2 px-3  border-yellow-400 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="enter code"/>
    </div>
    <div className="mb-3  w-80 md:w-96 ml-10" >
      <input className="shadow appearance-none border border-yellow-400 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="password" type="password" placeholder="enter passkey"/>
     
    </div>
    
    
  </form>
<Link to='/jam'>
<button className=" ml-10  p-1 w-40 mb-2 rounded-lg bg-yellow-400 text-black" >join</button>
</Link>
<p className="ml-28">or</p>
<Link to='/setstage'>

<button className="  p-1 w-40 mb-3 mt-2 ml-10 rounded-lg bg-yellow-400 text-black" >set the stage</button>

<img src={Logo} className="float-right bottom-0 fixed right-0 hidden md:block"></img>
</Link>

        </>
    )
}

export default NewJam;