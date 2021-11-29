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

    const navigate = useNavigate();

    function getDeets(meetingname) {
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
      }

    const initUI = () => {
        const nameMessage = document.getElementById("name-message");
        nameMessage.innerHTML = `You are logged in as ${user.email}`;
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

    return (
        <div>
            <h1 id="name-message">Logging in...</h1>
            {
                isJoin? <NewJam user={user} joinroom={joinroom} joinperformer={joinperformer} /> : ""
            }
            {
                inMeeting? <>
                    <Meeting user={user} participantList = {participantList} leaveroom={leaveroom} cfname={cfname}/>
                
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
