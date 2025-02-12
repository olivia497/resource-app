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
    <div className="min-h-screen flex flex-col">
      <div className="bg-blue-50 px-4 py-10 flex-grow">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">
            Available Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              return (
                  <ResourceCard resource={resource}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}