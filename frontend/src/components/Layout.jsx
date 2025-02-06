import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom" //used with parent routes and allows us to render child routes

export function Layout(){
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}