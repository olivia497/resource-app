import { Navbar } from "./Navbar"
import { Outlet, useNavigate } from "react-router-dom" //used with parent routes and allows us to render child routes
import { useEffect } from "react"

export function Layout(){

  let user = sessionStorage.getItem("User")
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate("/")
    }
  }, [user])

  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}