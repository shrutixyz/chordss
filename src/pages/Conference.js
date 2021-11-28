import React, {useState, useEffect} from 'react'
import NewJam from './NewJam'
import VoxeetSDK from "@voxeet/voxeet-web-sdk"
import Meeting from './Meeting'
import {useNavigate} from 'react-router-dom'

const ConferenceJam = ({user}) => {
    const [isJoin, setisJoin] = useState(true)
    const [inMeeting, setinMeeting] = useState(false)
    const [participantList, setparticipantList] = useState([])

    const navigate = useNavigate();

    const initUI = () => {
        const nameMessage = document.getElementById("name-message");
        nameMessage.innerHTML = `You are logged in as ${user.email}`;
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
    });
    
    function joinroom(conferenceAlias) {
        
        console.log(conferenceAlias)
        /*
        1. Create a conference room with an alias
        2. Join the conference with its id
        */
        VoxeetSDK.conference.create({ alias: conferenceAlias })
        .then((conference) => VoxeetSDK.conference.join(conference,  {audio: false}))
    
        .then(() => {
            console.log('join')
            setisJoin(false)
            setinMeeting(true)
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
                    <Meeting user={user} participantList = {participantList} leaveroom={leaveroom}/>
                
                </> : ""
            }
            

            
        </div>
    )
}

export default ConferenceJam
