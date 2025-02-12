import { getResource } from "../api"
import { useParams, useNavigate } from "react-router-dom" //useNavigate lets us traverse between pages
import { useState, useEffect } from "react"

export function ViewResource(){
  const [resource, setResources] = useState([])

  let params = useParams()
  const navigate = useNavigate()
  let id = params.id //this id variable is the id in the url

  useEffect(() => {
    async function loadResource(){
      let data = await getResource(id) //expecting the id to know what it's looking for
      setResources(data)
    }

    loadResource()
  }, [id])

  return (
    <>
      <h1>{resource.name}</h1>
      <h2>{resource.type}</h2>
      <p>{resource.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}