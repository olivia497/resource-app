import { getResources } from "../api"
import { useState, useEffect } from "react"
import { ResourceCard } from "../components/ResourceCard"


export function ResourceIndex(){
  const [resources, setResources] = useState([])

  useEffect(() => {
    async function loadAllResources(){
      const data = await getResources()
      setResources(data)
    }

    loadAllResources()
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