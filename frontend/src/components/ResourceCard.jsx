import { Link } from "react-router-dom";

export function ResourceCard({resource}){
  return (
    <Link to={`/viewresource/${resource._id}`} className="resource">
      <h1>{resource.name}</h1>
      <h2>{resource.type}</h2>
      <p>{resource.description}</p>
    </Link>
  )
};