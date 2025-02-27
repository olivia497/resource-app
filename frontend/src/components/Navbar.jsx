import { Link } from "react-router-dom" //acts as a button to navigate between the routes we've made 
import { pageData } from "./pageData"

export function Navbar(){
  return(
    <div className="navbar">
      {pageData.map((page) => {
        return (
          <>
            <Link to={page.path} className="navItem">
              <button>
                {page.name}
              </button>
            </Link>
          </>
        )
      })}
    </div>
  )
}