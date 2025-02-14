//Functions that correspond to each route and each axios method we could call
import axios from "axios";

const URL = "http://localhost:2121";

export async function getResources() {
  try {
    const response = await axios.get(`${URL}/resources`);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error("Error fetching resources:", error);
    return null;
  }
};

export async function getResource(id) {
  try {
    const response = await axios.get(`${URL}/resources/${id}`);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error(`Error fetching resource with id ${id}:`, error);
    return null;
  }
};

export async function createResource(resource){
  const response = await axios.post(`${URL}/resources`, resource);
  return response;
};

export async function updateResource(id, resource){
  const response = await axios.put(`${URL}/resources/${id}`, resource);
  return response;
};

export async function deleteResource(id){
  const response = await axios.delete(`${URL}/resources/${id}`);
  return response;
};


//User Functions
export async function getUser(){
  const response = await axios.get(`${URL}/users`);

  if(response.status === 200){
    return response.data;
  }else{
    return;
  }
};

export async function createUser(user){
  console.log("Sending user data:", user)
  const response = await axios.post(`${URL}/users`, user);
  return response;
};

export async function updateUser(id,user){
  const response = await axios.put(`${URL}/users/${id}`, user);
  return response;
};

export async function verifyUser(user){
  const response = await axios.post(`${URL}/users/login`, user);
  console.log(response)
  if(response.data.success){
    return response.data.token;
  }else{
    return;
  }
};