import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import { About } from './pages/About'
import { CreateResource } from './pages/CreateResource'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'
import { ResourceIndex } from './pages/ResourceIndex'
import { ViewResource } from './pages/ViewResource'
import { Layout } from './components/Layout'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  useEffect(() => {
    let token = sessionStorage.getItem("User")
    if(token){
      axios.defaults.headers.common["authorization"] = `Bearer ${token}`
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createresource" element={<CreateResource />} />
          <Route path="/resourceindex" element={<ResourceIndex />} />
          <Route path="/viewresource/:id" element={<ViewResource />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
