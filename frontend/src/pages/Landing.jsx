import { CreateUser } from "../components/CreateUser"
import { Login } from "../components/Login"
import { useState } from "react"

export function Landing(){
  
  //view == 0 --> Login
  //view == 1 --> Create 
  const[view, setView] = useState(0)

  return (
    <>
      {!view ?
        <>
          <Login />
          <button onClick={() => setView(!view)} className="text-white text-center mx-auto px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max">Sign Up</button>
        </> :
        <>
          <CreateUser />
          <button onClick={() => setView(!view)} className="text-white text-center mx-auto px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max">Login</button>
        </>
      }
    </>
  )
}