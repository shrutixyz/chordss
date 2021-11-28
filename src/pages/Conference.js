import React, {useState, useEffect} from 'react'
import NewJam from './NewJam'
import VoxeetSDK from "@voxeet/voxeet-web-sdk"
import Meeting from './Meeting'

const ConferenceJam = ({user}) => {
    const [isJoin, setisJoin] = useState(true)
    const [inMeeting, setinMeeting] = useState(false)

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
            setinMeeting(true)
        })
        .catch((err) => console.error(err));
    };
    return (
        <div>
            <h1 id="name-message">Logging in...</h1>
            {
                isJoin? <NewJam user={user} joinroom={joinroom} /> : ""
            }
            {
                inMeeting? <>
                    <Meeting user={user}/>
                
                </> : ""
            }
            

            
        </div>
    )
}

export default ConferenceJam
