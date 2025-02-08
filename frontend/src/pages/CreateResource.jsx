import { useState } from "react"
import { createResource } from "../api"

export function CreateResource(){
  const[name, setName] = useState("")
  const[type, setType] = useState("")
  const[description, setDescription] = useState("")

  async function handleSubmit(){
    let submitObject = {
      name: name,
      type: type,
      description: description
    }

    await createResource(submitObject)

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Resource Name:</label>
        <input onChange={(e) => setName(e.target.value)} required name="name"/>
        <label>Resource Type:</label>
        <input onChange={(e) => setType(e.target.value)}required name="type"/>
        <label>Resource Description:</label>
        <textarea onChange={(e) => setDescription(e.target.value)} required name="description"/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}