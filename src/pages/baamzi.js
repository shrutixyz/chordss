import { async } from '@firebase/util'
import React, {useState, useEffect} from 'react'
import VoxeetSDK from "@voxeet/voxeet-web-sdk"

const Baamzi = ({user}) => {



    const [conferenceAlias, setconferenceAlias] = useState("")
    const [participantlist, setparticipantlist] = useState([])
    const [inputList, setinputList] = useState([])

    const startScreenShareBtn = document.getElementById("start-screenshare-btn");

    const addScreenShareNode = stream => {
        const screenShareContainer = document.getElementById("screenshare-container");
        let screenShareNode = document.getElementById("screenshare");
      
        // if (screenShareNode) {
        //   return alert("There is already a participant sharing their screen!");
        // }
        screenShareNode = document.createElement("video");
        screenShareNode.autoplay = "autoplay";
        screenShareNode.style.display = "none" // although the screen is shared but it wont be visible yay
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
        setInputAudioDeviceBtn.onclick = async () => {
            let selectedInputAudioDevice = inputAudioDevices.options[inputAudioDevices.selectedIndex];
            alert(`Your input audio device (mic) has been set to: ${selectedInputAudioDevice.text}`)
            console.log(selectedInputAudioDevice.value)
            await VoxeetSDK.mediaDevice.selectAudioInput(selectedInputAudioDevice.value);
        }
        
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
        }
    }, user)

    const inputAudioDevices = document.getElementById("input-audio-devices");
    
    const setInputAudioDeviceBtn = document.getElementById("set-input-audio-device-btn");
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
                VoxeetSDK.mediaDevice.enumerateAudioDevices("input")
              .then(devices => {
                  console.log(devices)
                devices.forEach(device => {
                  inputAudioDevices.append(new Option(device.label, device.deviceId));
                });
     
                setInputAudioDeviceBtn.disabled = false;
              })
              .catch(err => console.error(err));
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
           
        <div class="form">
            <label for="input-audio-devices">Input Audio Devices:</label>
            <select id="input-audio-devices" class="custom-select">
                {inputList.map(item => {
                    <option value={item}></option>
                })}
            </select>
            <button id="set-input-audio-device-btn" type="button" disabled>Set</button>
        </div>
           <div id="actions">
  
  <button id="start-screenshare-btn" disabled>Start screen share</button>
  <button id="stop-screenshare-btn" disabled>Stop screen share</button>
  
</div>

<div id="video-container" className="hidden"></div>
<div id="screenshare-container"></div>
        </div>
    )
}

export default Baamzi;