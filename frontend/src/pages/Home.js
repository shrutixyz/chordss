import { Link } from "react-router-dom";
import IntroImage from "../components/introimage";
import NavBar from "../components/Navbar";

function Home(){

    return (
        <>
        <NavBar/>
        <div className="flex justify-around flex-col md:flex-row items-center mt-10">
        <div className="flex-initial "><IntroImage/>
        </div>
        <div className="flex-initial h-30 w-50 bg-transparent">
            <h1 className="text-8xl">CHORDS</h1>
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
              <p className="px-3 md:px-40 text-justify text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Dictum at tempor commodo ullamcorper. Est lorem ipsum dolor sit amet consectetur. Neque laoreet suspendisse interdum consectetur libero. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Curabitur gravida arcu ac tortor. Tellus orci ac auctor augue mauris augue neque. Turpis egestas sed tempus urna et.

Eget est lorem ipsum dolor sit amet. Purus ut faucibus pulvinar elementum integer. Fermentum odio eu feugiat pretium nibh. Ac auctor augue mauris augue neque gravida in fermentum. Arcu risus quis varius quam quisque id. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Dictumst quisque sagittis purus sit amet. Faucibus nisl tincidunt eget nullam. Ac feugiat sed lectus vestibulum mattis ullamcorper. Ut tortor pretium viverra suspendisse potenti nullam ac. Faucibus nisl tincidunt eget nullam non nisi est sit.</p>
           <br/><br/>
           <p >made with 💖 by shruti and aakash</p>
              </center>
<br/>
             
              </>
    )


}

export default Home;