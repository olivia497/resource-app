import { getResources } from "../api"
import { useState, useEffect } from "react"
import { ResourceCard } from "../components/ResourceCard"


export function ResourceIndex(){
  const [resources, setResources] = useState([])

  useEffect(() => {
    async function loadAllPosts(){
      const data = await getResources()
      setResources(data)
    }

    loadAllPosts()
  }, [])

  return (
    <div className="resources">
      {resources.map((resource) => {
        return (
          <>
            <ResourceCard resource={resource}/>
          </>
        )
      })}
    </div>
  )
}