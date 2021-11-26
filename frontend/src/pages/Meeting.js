import {Helmet} from "react-helmet";
import VoxeetSDK from "@voxeet/voxeet-web-sdk"


function Meeting ({user}){

    const avengersNames = [
        "frooti",
        "aakash",
        "baamzi",
        "samosa",
        "jalebi",
        "hehe",
      ];
      let randomName =
        avengersNames[Math.floor(Math.random() * avengersNames.length)];
        const initUI = () => {
            const nameMessage = document.getElementById("name-message");
            nameMessage.innerHTML = `You are logged in as ${randomName}`;
            const joinButton = document.getElementById('join-btn')
            const conferenceAliasInput = document.getElementById('alias-input')
        
            joinButton.disabled = false
            joinButton.onclick = () => {
                let conferenceAlias = conferenceAliasInput.value;
        
                /*
                1. Create a conference room with an alias
                2. Join the conference with its id
                */
                VoxeetSDK.conference.create({ alias: conferenceAlias })
                    .then((conference) => VoxeetSDK.conference.join(conference, {}))
                    .then(() => {
                        joinButton.disabled = true;
                    })
                    .catch((err) => console.error(err));
            };
            const leaveButton = document.getElementById('leave-btn')
            leaveButton.onclick = () => {
                VoxeetSDK.conference
                    .leave()
                    .then(() => {
                        joinButton.disabled = false
                        leaveButton.disabled = true
                    })
                    .catch((err) => console.error(err));
            }
          };
    const main = async () => {
        VoxeetSDK.initialize(process.env.CONSUMER_KEY, process.env.CONSUMER_SECRET)
        try {
            // Open the session here !!!!
            await VoxeetSDK.session.open({ name: randomName })
        } catch (e) {
            alert('Something went wrong : ' + e)
        }
        initUI();
    }

    // const main = async () => {
    //     VoxeetSDK.initialize("", "");
    //   };
      
      main();

      
    return (
        <>
  
  <Helmet>
    <script
      src="https://unpkg.com/@voxeet/voxeet-web-sdk@3.3.0/dist/voxeet-sdk.js"
      type="text/javascript" />
 
</Helmet>
    <div id="app">
      <h1 id="name-message">Logging in...</h1>
    </div>
    <div id="app">
  <h1 id="name-message">You are logged out.</h1>
  <div id="form">
    <label>Conference alias :</label>
    <input id="alias-input" value="Avengers meeting" />
    <button id="join-btn" disabled>Join</button>
  </div>
</div>
<div id="form">
  
  <button id="join-btn">Join</button>
  <button id="leave-btn" disabled>Leave</button>
</div>

        </>
    )

   
    
}





export default Meeting;