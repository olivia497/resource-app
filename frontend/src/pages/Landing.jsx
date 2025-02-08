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
          <button onClick={() => setView(!view)}>Sign Up</button>
        </> :
        <>
          <CreateUser />
          <button onClick={() => setView(!view)}>Login</button>
        </>
      }
    </>
  )
}