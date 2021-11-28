import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Logo from '../images/guitarist.svg';
import {useEffect} from 'react'
import {auth} from '../components/utils/firebase';
function SetStage({user}){
  const history = useNavigate()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if(!user) {history('/'); alert("please log in")}
        
    })
},[])

    return (
        <>
        <NavBar user={user} />
        <div className="float-left md:float-right mr-32 mt-28 ml-4">
<p className="text-4xl ">Let us know some deets!</p> <br/>
<div className="mb-6 w-80 md:w-96 mt-2" >
      
      <input className="shadow appearance-none border rounded w-full py-2 px-3  border-yellow-400 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline float-left" id="seshname" type="text" placeholder="name of jam session"/>
    </div>
    <p className="text-lg mt-16">select instruments you'll need:-</p> <br/>
    <div class="block">

  <div class="mt-0  flex flex-col md:flex-row  justify-between" >
    <div>
      <label class="inline-flex items-center w-44 border-yellow-500 border-2 px-6 py-1 rounded-lg">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2">piano</span>
      </label>
    </div>
    {/* <div>
      <label class="inline-flex items-center  border-yellow-500 border-2 px-6 py-1 rounded-lg">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2">guitar</span>
      </label>
    </div> */}
    <div>
      <label class="inline-flex items-center w-44  border-yellow-500 border-2 px-6 py-1 rounded-lg">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2">drums</span>
      </label>
    </div>
  </div>
</div>
    <Link to='/jam'>
<button className=" ml-0  p-1 w-40 mb-2 mt-8 rounded-lg bg-yellow-400 text-black" >jam it!</button>
</Link>
        </div>
        
                <img src={Logo} className="fixed bottom-0 hidden md:block"></img>
        </>
    )

}

export default SetStage;