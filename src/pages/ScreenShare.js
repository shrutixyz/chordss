import { async } from '@firebase/util'
import React, {useState, useEffect} from 'react'
import VoxeetSDK from "@voxeet/voxeet-web-sdk"

const ScreenShare = ({user}) => {
   


    const [conferenceAlias, setconferenceAlias] = useState("")
    const [participantlist, setparticipantlist] = useState([])

    const startScreenShareBtn = document.getElementById("start-screenshare-btn");

    const addScreenShareNode = stream => {
        const screenShareContainer = document.getElementById("screenshare-container");
        let screenShareNode = document.getElementById("screenshare");
      
        if (screenShareNode) {
          return alert("There is already a participant sharing their screen!");
        }
        screenShareNode = document.createElement("video");
        screenShareNode.autoplay = "autoplay";
        navigator.attachMediaStream(screenShareNode, stream);
      
        screenShareContainer.appendChild(screenShareNode);
      }
      const removeScreenShareNode = () => {
        let screenShareNode = document.getElementById("screenshare");
      
        if (screenShareNode) {
          screenShareNode.srcObject = null; // Prevent memory leak in Chrome
          screenShareNode.parentNode.removeChild(screenShareNode);
        }
      }
    const initUI = () => {
        
        const stopScreenShareBtn = document.getElementById("stop-screenshare-btn");
        stopScreenShareBtn.onclick = () => {
            VoxeetSDK.conference.stopScreenShare()
                .then(() => {
                    startScreenShareBtn.disabled = false;
                    stopScreenShareBtn.disabled = true;
                })
                .catch((err) => console.error(err));
            }
        const nameMessage = document.getElementById("name-message");
        nameMessage.innerHTML = `You are logged in as ${user.email}`;
        startScreenShareBtn.onclick = () => {
            VoxeetSDK.conference.startScreenShare()
                .then(() => {
                    startScreenShareBtn.disabled = false;
                })
                .catch((err) => console.error(err));
            }
       
        };

        

    useEffect(() => {
        if(user){
            
        }
        async function main() {
            const ck = process.env.REACT_APP_CONSUMER_KEY + "=="
            const sk = "-"+process.env.REACT_APP_CONSUMER_SECRET + "="
            console.log(user)
            VoxeetSDK.initialize(ck,sk)
            try {
                // Open the session here !!!!
                await VoxeetSDK.session.open({ name: user.email })
                initUI()
            } catch (e) {
                alert('Something went wrong : ' + e)
            }
        }
        main();
    }, user)
function lmao(){
    // var stream;
    try {
    
    var stream = navigator.mediaDevices.getDisplayMedia( {video: true, audio: true }) 
    const audioSource= stream.getAudioTracks ()[0];
    
    const videoSource= stream.getVideoTracks ()[0];
    
    if (audioSource && videoSource ) {
    
    const props = { audioSource, videoSource };
    
    }
    
    } catch (e) {
    
    console.log('Error getting Stream', e);
    
    }
    VoxeetSDK.videoPresentation.start(stream.getVideoTracks ()[0])
}

    function joinroom() {
        

        /*
        1. Create a conference room with an alias
        2. Join the conference with its id
        */
        VoxeetSDK.conference.create({ alias: conferenceAlias })
            .then((conference) => VoxeetSDK.conference.join(conference, {})).then(()=>{
                startScreenShareBtn.disabled = false;
            })
            .then(() => {
                console.log('join')
            })
            .catch((err) => console.error(err));
    };
    
    const addParticipantNode = participant => {
        let temp = participantlist
        if (participant.id === VoxeetSDK.session.participant.id) return;
        if(!participantlist.includes(participant.info.name)){
            temp.push(participant.info.name)
            console.log(temp)
            setparticipantlist(temp)
        }
    }

    useEffect(() => {
        console.log(participantlist)
    }, [participantlist])

    VoxeetSDK.videoPresentation.on("started", (e) => {});

    VoxeetSDK.conference.on("streamAdded", (participant, stream) => {
        if (stream.type === 'ScreenShare') return addScreenShareNode(stream);
        console.log("stream added")
        addParticipantNode(participant);
    });

    VoxeetSDK.conference.on('streamRemoved', (participant, stream) => {
        
        removeParticipantNode(participant);
        if (stream.type === 'ScreenShare') return 
        removeScreenShareNode()
    });

    function removeParticipantNode(participant) {
        const result = participantlist.filter(name => name != participant.info.name);
        setparticipantlist(result)
    }

    function leaveroom(){
        VoxeetSDK.conference
        .leave()
        .then(() => {
            const result = participantlist.filter(name => name != VoxeetSDK.session.participant.info.name);
            setparticipantlist(result)
        }).then(() => {
            startScreenShareBtn.disabled = true;})
        .catch((err) => console.error(err));
    }

    
    return (

        <div>
           <h1 id="name-message">Logging in...</h1>
           <input type="text" value={conferenceAlias} onChange={e => setconferenceAlias(e.target.value)}/>
           <button onClick={e => joinroom()}>join</button>
           <button id="leave-btn" onClick={e => leaveroom()}>Leave</button>
           <div id="participants">
                <h3>Participants</h3>
                <ul id="participants-list"></ul>
                {console.log(participantlist, "from return func")}
                {participantlist.map(item => {
                    return <h1>{item}</h1>
                })}
           </div>
           <div id="actions">
  
  <button id="start-screenshare-btn" disabled>Start screen share</button>
  <button id="stop-screenshare-btn" disabled>Stop screen share</button>
  <button onclick={lmao}>share videooooooooo</button>
</div>

<div id="video-container"></div>
<div id="screenshare-container"></div>
        </div>
    )
}

export default ScreenShare;