const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const resources = require("./resourceRoutes")

const app = express()
const PORT = 2121

//app.use mounts middleware 
app.use(cors())  //cors is the library imported telling express how to handle resources across different domains 
app.use(express.json())  //mounting our express.json method to parse requests into json
app.use(resources) 


app.listen(PORT, () => {
  connect.connectToServer()
  console.log(`Server is running on ${PORT}`)
}) 