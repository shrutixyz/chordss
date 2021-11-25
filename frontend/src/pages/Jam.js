import './jam.scss';
import {BiShareAlt} from 'react-icons/bi'
import {MdCallEnd} from 'react-icons/md'
import SetStage from './SetStage';


function Jam(){
return <>
<div className="flex justify-between m-4" >
    <p className="text-2xl">{document.getElementById('seshname').value}</p>
    <BiShareAlt className="float-right h-8 w-8"/>
</div>

<div className="flex justify-between m-4 fixed bottom-0 right-0 mr-6" >
    {/* <p className="text-2xl">participants</p> */}
    <MdCallEnd className="h-16 w-16 "/>
</div>
</>
}



export default Jam