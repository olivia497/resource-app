//Functions that correspond to each route and each axios method we could call
import axios from "axios";

const URL = "http://localhost:2121"

export async function getResources(){
  const response = await axios.get(`${URL}/resources`)

  if(response.status === 200){
    return response.data
  }else{
    return 
  }
}

export async function getResource(id){
  const response = await axios.get(`${URL}/resources/${id}`)

  if(response.status === 200){
    return response.data
  }else{
    return 
  }
}

export async function createResource(resource){
  const response = await axios.post(`${URL}/resources`, resource)
  return response 
}

export async function updateResource(id, resource){
  const response = await axios.put(`${URL}/resources/${id}`, resource)
  return response 
}

export async function deleteResource(id){
  const response = await axios.delete(`${URL}/resources/${id}`)
  return response 
}