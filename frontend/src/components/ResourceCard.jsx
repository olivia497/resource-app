// import { Link } from "react-router-dom"

// export function ResourceCard({resource}){
//   return (
//     <Link to={`/viewresource/${resource._id}`} className="resource">
//       <h1>{resource.name}</h1>
//       <h2>{resource.type}</h2>
//       <p>{resource.description}</p>
//     </Link>
//   )
// }


import { Link } from "react-router-dom";

export function ResourceCard({ resource }) {
  return (
    <div className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {/* Individual resource card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full flex flex-col">
          <h1 className="text-2xl font-semibold text-teal-700 mb-4">{resource.name}</h1>
          <h2 className="text-lg text-gray-600 mb-4">{resource.type}</h2>
          <p className="text-gray-500 mb-4">{resource.description}</p>
          
          {/* Centered 'Read More' link */}
          <Link 
            to={`/viewresource/${resource._id}`} 
            className="text-white text-center mx-auto px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}