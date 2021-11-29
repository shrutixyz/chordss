import React from 'react'
import { Link } from 'react-router-dom'

const Left = () => {
    return (
        <div className="mt-64">
           <center><p className="text-3xl">You left the session!</p>
           <br/>
          <Link to="/">
          <p  class="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent  hover:bg-yellow-400 hover:text-black mt-4 lg:mt-0">Return to Home</p>
          
          </Link>
          
           </center>

        </div>
    )
}

export default Left
