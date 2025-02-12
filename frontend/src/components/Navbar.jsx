import { Link } from "react-router-dom" //acts as a button to navigate between the routes we've made 
import { pageData } from "./pageData"

export function Navbar(){
  return(
    <div className="navbar bg-teal-700 border-b border-teal-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <nav className="flex space-x-4 justify-center w-full">
      {pageData.map((page) => {
        return (
          <>
            <Link to={page.path} className="navItem text-white px-6 py-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors">
              <button>
                {page.name}
              </button>
            </Link>
          </>
        )
      })}
      </nav>
    </div>
  </div>
  </div>
  )
}