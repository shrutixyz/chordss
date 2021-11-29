import React, {useState, useEffect} from 'react'
import NewJam from './NewJam'
import VoxeetSDK from "@voxeet/voxeet-web-sdk"
import Meeting from './Meeting'
import {useNavigate} from 'react-router-dom'
import ParticipantMeeting from './ParticipantMeeting'
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 
import { db } from '../components/utils/firebase'

const ConferenceJam = ({user}) => {
    const [isJoin, setisJoin] = useState(true)
    const [inMeeting, setinMeeting] = useState(false)
    const [participantList, setparticipantList] = useState([])
    const [cfname, setcfname] = useState("")
    const [inMeetingAsParticipant, setinMeetingAsParticipant] = useState(false)
    const [started, setstarted] = useState(false)
    const [inputList, setinputList] = useState([])
    const [micOption, setmicOption] = useState("")
    const [isMute, setisMute] = useState(false)


    const navigate = useNavigate();

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
    

    function getDeets(meetingname) {
        const docRef = doc(db, "meeting", 'lmao');
        getDoc(docRef).then(docSnap => {
    
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setstarted(docSnap.data()['meetingStarted'])
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        })
      }

    const initUI = () => {
        const nameMessage = document.getElementById("name-message");
        nameMessage.innerHTML = `You are logged in as ${user.email}`;
    }

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


    function joinperformer(conferenceAlias) {
        

        /*
        1. Create a conference room with an alias
        2. Join the conference with its id
        */
        VoxeetSDK.conference.create({ alias: conferenceAlias })
            .then((conference) => VoxeetSDK.conference.join(conference, {}))
            .then(() => {
                console.log('join')
                setisJoin(false)
            setinMeeting(true)
            setinMeetingAsParticipant(false)
            setcfname(conferenceAlias)
            })
            .then(() => {
                VoxeetSDK.mediaDevice.enumerateAudioDevices("input")
              .then(devices => {
                  console.log(devices)
                  setinputList(devices)
     
              })
              .catch(err => console.error(err));
            })
            
            .catch((err) => console.error(err));
    };
     
    const addParticipantNode = participant => {
        let temp = participantList
        if (participant.id === VoxeetSDK.session.participant.id) return;
        if(!participantList.includes(participant.info.name)){
            temp.push(participant.info.name)
            console.log(temp)
            setparticipantList(temp)
        }
    }

    useEffect(() => {
        console.log(participantList)
    }, [participantList])

    VoxeetSDK.conference.on("streamAdded", (participant, stream) => {
        if (stream.type === 'ScreenShare') return addScreenShareNode(stream);
        console.log("stream added")
        console.log(participant)
        addParticipantNode(participant);
        getDeets(cfname);
    });
    
    function joinroom(conferenceAlias) {
        
        console.log(conferenceAlias)
        /*
        1. Create a conference room with an alias
        2. Join the conference with its id
        */
        VoxeetSDK.conference.create({ alias: conferenceAlias })
        .then((conference) => VoxeetSDK.conference.listen(conference))
    
        .then(() => {
            console.log('join')
            setisJoin(false)
            setinMeeting(false)
            setcfname(conferenceAlias)
            setinMeetingAsParticipant(true)
        })
        .then(() => {
            // const unsub = onSnapshot(doc(db, "meeting", "lmao"), (doc) => {
            //     console.log(" data: ", doc.data());
            //     setstarted(doc.data[''])
            //   });
            const docRef = doc(db, "meeting", "lmao");
            getDoc(docRef).then(docSnap => {

                if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setstarted(docSnap.data()['meetingStarted'])
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            })

        })
        .catch((err) => console.error(err));
    };
    VoxeetSDK.conference.on('streamRemoved', (participant, stream) => {
        
        removeParticipantNode(participant);
    });

    function removeParticipantNode(participant) {
        const result = participantList.filter(name => name != participant.info.name);
        setparticipantList(result)
    }

    function leaveroom(){
        VoxeetSDK.conference
        .leave()
        .then(() => {
            console.log("left")
            navigate("/left")
        })
        .catch((err) => console.error(err));
    }

    async function handleChange(e){
        console.log(e.target.value)
        setmicOption(e.target.value)
        alert(`Your input audio device (mic) has been set to: ${e.target.value}`)
        await VoxeetSDK.mediaDevice.selectAudioInput(e.target.value);
    }

    function startScreenShare(){
        VoxeetSDK.conference.startScreenShare()
                .then(() => {
                    console.log("start screen share")
                })
                .catch((err) => console.error(err));
    }

    function muteparticipant(){
        VoxeetSDK.conference.mute(VoxeetSDK.session.participant, true)
        setisMute(true)
    }

    function unmuteparticipant(){
        VoxeetSDK.conference.mute(VoxeetSDK.session.participant, false)
        setisMute(false)
    }

    function muteornah(){
        return VoxeetSDK.conference.isMuted
    }

    return (
        <div>
            <h1 id="name-message">Logging in...</h1>
            <div id="video-container" className="hidden"></div>
                    <div id="screenshare-container">
                        
                    </div>
            {
                isJoin? <NewJam user={user} joinroom={joinroom} joinperformer={joinperformer} /> : ""
            }
            {
                inMeeting? <>
                    <div class="form">
                        <label for="input-audio-devices">Input Audio Devices:</label>
                        <select id="input-audio-devices" class="custom-select" value={micOption} onChange={e => handleChange(e)}>
                            { inputList.map((item) => {
                                
                                return <option value={item.deviceId} key={item.deviceId}>{item.label}</option>
                            }) }
                        </select>
                    </div>
                    {}
                    <Meeting user={user} participantList = {participantList} leaveroom={leaveroom} cfname={cfname}/>
                    <button id="start-screenshare-btn" onClick={startScreenShare}>Start Screen Share</button>
                    <p  class="inline-block text-sm px-4 py-2 m-4 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0" onClick={() => muteparticipant()}>Mute</p>
                    <p  class="inline-block text-sm px-4 py-2 m-4 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0" onClick={() => unmuteparticipant()}>Unmute</p>
                    <p>mute: {isMute? "true": "false"}</p>
                </> : ""

            }

            {
                inMeetingAsParticipant? <>
                    <ParticipantMeeting user={user} participantList = {participantList} leaveroom={leaveroom} cfname={cfname} started={started}/>
                </> : ""
            }

           

            
        </div>
    )
}

export default ConferenceJam
