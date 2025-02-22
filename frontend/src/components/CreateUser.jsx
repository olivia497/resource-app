import { createUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function CreateUser() {

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
  
    // Log the user data before sending it to the backend
    // console.log("Sending user data:", user);
  
    let response = await createUser(user);
    console.log(response);
  
    if (response) {
      navigate("/home");
      sessionStorage.setItem("User", response);

      //making an authorization field as default, "Bearer" is formatting
      axios.defaults.headers.common["Authorization"] = `Bearer ${response}`;
    } else if (response.status !== 201) {
      alert("User account could not be created");
    }
  };

  return (
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
        <button type="submit" className="text-white text-center mx-auto px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max">
          Create Account
        </button>
      </form>
    </>
  );
};
