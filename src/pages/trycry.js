import { async } from '@firebase/util'
import React, {useState, useEffect} from 'react'
import VoxeetSDK from "@voxeet/voxeet-web-sdk"

const Trycry = () => {

    const [conferenceAlias, setconferenceAlias] = useState("")

    const avengersNames = [
        "Thor",
        "Cap",
        "Tony Stark",
        "Black Panther",
        "Black Widow",
        "Hulk",
        "Spider-Man",
      ];
      let randomName =
        avengersNames[Math.floor(Math.random() * avengersNames.length)];

        const initUI = () => {
            const nameMessage = document.getElementById("name-message");
            nameMessage.innerHTML = `You are logged in as ${randomName}`;
          };

    useEffect(() => {
        async function main() {
            const ck = process.env.REACT_APP_CONSUMER_KEY + "=="
            const sk = "-"+process.env.REACT_APP_CONSUMER_SECRET + "="
            console.log(ck, sk, process.env.REACT_APP_API_KEY)
            // VoxeetSDK.initialize('76NZxNDpuR_CpImnhnO3pQ==', '-JpHcaMf6MVXey48uy-lPEJI4eTYuPRAQ-u76qLtQNA=')
            VoxeetSDK.initialize(ck,sk)
            try {
                // Open the session here !!!!
                await VoxeetSDK.session.open({ name: randomName })
                initUI()
            } catch (e) {
                alert('Something went wrong : ' + e)
            }
        }
        main();
    }, [])


    function joinroom() {
        

        /*
        1. Create a conference room with an alias
        2. Join the conference with its id
        */
        VoxeetSDK.conference.create({ alias: conferenceAlias })
            .then((conference) => VoxeetSDK.conference.join(conference, {}))
            .then(() => {
                console.log('join')
            })
            .catch((err) => console.error(err));
    };
    

    
    return (

        <div>
           <h1 id="name-message">Logging in...</h1>
           <input type="text" value={conferenceAlias} onChange={e => setconferenceAlias(e.target.value)}/>
           <button onClick={e => joinroom()}>join</button>
        </div>
    )
}

export default Trycry
