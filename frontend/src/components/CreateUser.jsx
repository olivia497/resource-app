import { createUser } from "../api"
import { useState } from "react"

export function CreateUser(){

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: ""

  })

  function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    let response = await createUser(user)
    console.log(response)
    if(response.status !== 200){
      alert("User account could not be created")
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder={"Username"} 
          onChange={handleChange} 
          name="userName" 
          required
        />
        <input 
          placeholder={"Email"} 
          onChange={handleChange} 
          name="email" 
          required
        />
        <input 
          placeholder={"Password"} 
          onChange={handleChange} 
          name="password" 
          required
          type="password"
        />
        <button type="submit">
          Create Account
        </button>
      </form>
    </>
  )
}