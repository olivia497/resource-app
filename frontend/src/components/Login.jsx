import { verifyUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; //library used to call in backend routes

export function Login(){

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value})
  };

  async function handleSubmit(e){
    e.preventDefault();
    let response = await verifyUser(user);
    if(response){
      navigate("/home");
      sessionStorage.setItem("User", response);

      //making an authorization field as default, "Bearer" is formatting
      axios.defaults.headers.common["Authorization"] = `Bearer ${response}`;
    }else {
      alert ("Login Failed");
    }
    
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </>
  )
};