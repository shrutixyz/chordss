import { Link } from "react-router-dom";
import IntroImage from "../components/introimage";
import NavBar from "../components/Navbar";

function Home({user}){

    return (
        <>
        <NavBar user={user}/>
        <div className="flex justify-around flex-col md:flex-row items-center mt-10">
        <div className="flex-initial "><IntroImage/>
        </div>
        <div className="flex-initial h-30 w-50 bg-transparent">
            <h1 className="text-8xl">CHORDZ</h1>
            <br/>
            <p className="text-2xl">organise and attend online music
            <br/>jam sessions,
            with best quality!</p>
            <br/>
            <div className="flex justify-between">
            
            <a href="#about">
            <button className="border-2  p-2 w-40 mb-3 rounded-lg border-yellow-400" >Learn More</button>
                </a>
                <Link to="/login">
                <button className="border-2  p-2 w-40 mb-3 rounded-lg border-yellow-400" >Get Started</button>
            </Link>
           
             </div>
        </div>
        

      </div>
              <br/><br/>
              <center><p className="underline text-3xl" id="about"> About</p>
              <br/>
              <p className="px-3 md:px-40 text-justify text-lg">Welcome to chordz, the only thing you'll ever need to seemlessly attend and organise hybrid music concerts or maybe just casual jam sessions. The usage is simple and straightforward. Basically you would need to login/create an account on chordz. Thereafter, organisers can create a new jam room, they'll fill in the requirements of what instruments they'll need virtually, and then get a jam room created, now they can easily share the details of this room using in-app share feature, and then any common user who'd like to attend the music session can just click on the link and they'll be redirected to that specific jam session. The main aim to create it was to integrate the hybrid environment correctly and letting people have the sense of place, instead of a boring screen show.
<br/><br/>
And we're focussed to make the user experience even better over time. Also, thanks to dolby for their amazing APIs.</p>
           <br/><br/>
           <p >made with 💖 by shruti and aakash</p>
              </center>
<br/>
             
              </>
    )


}

export default Home;