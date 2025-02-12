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
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
       <div className="bg-blue-50 px-4 py-10 flex-grow">
        <div className="container-xl lg:container m-auto">
          <div className="flex justify-end mb-4">
            <button onClick={() => navigate(-1)} className="text-white px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max"
            >
              Back
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full flex flex-col items-center justify-center mt-6">
            <h1 className="text-2xl font-semibold text-teal-700 mb-4 text-center">
              {resource.name}
            </h1>
            <img
              src={resource.imageUrl} // Image URL TBD
              alt="Resource"
              className="w-full max-w-[500px] min-h-[300px] mb-4 border-2 border-dashed border-zinc-1000" // Max width and outline for visualization, will be removed at later date
            />
            <h2>Type:</h2>
            <p className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"> {resource.type}</p>

            <p>Description: </p>
            <p  className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              {resource.description}
            </p>

            <div className="flex flex-col items-center space-y-2 mt-4">
              <button className="text-white text-center mx-auto px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max">
                Edit Resource
              </button>
              <button className="text-white text-center mx-auto px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max">
                Delete Resource
              </button>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}