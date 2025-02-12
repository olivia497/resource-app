const express = require("express")
const database = require("./connect.js")
const ObjectId = require("mongodb").ObjectId
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})

let resourceRoutes = express.Router()

//Retrieve All
//creates route at http://localhost:2121/recources
resourceRoutes.route("/resources").get(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("resources").find({}).toArray()
  if (data.length > 0){
    response.json(data)
  }else{
    throw new Error("No data found")
  }
})

//Retrieve One
resourceRoutes.route("/resources/:id").get(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("resources").findOne({_id: new ObjectId(request.params.id)})
  if (Object.keys(data).length > 0){
    response.json(data)
  }else{
    throw new Error("No data found")
  }
})

//Create a new resource
resourceRoutes.route("/resources").post(verifyToken, async (request, response) => {
  let db = database.getDb()

  const userId = request.body.user._id

  if (!ObjectId.isValid(userId)) {
    return response.status(400).json({ message: "Invalid user ID" });
  }

   // Check if the user exists in the database
   const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
   if (!user) {
     return response.status(404).json({ message: "User not found" });
   }

  let mongoObject = {
    name: request.body.name,
    type: request.body.type, 
    description: request.body.description,
    brand: request.body.brand,
    createdBy: new ObjectId(userId)
  }

  try{
    let data = await db.collection("resources").insertOne(mongoObject)
    response.json(data)
  }catch (error){
    response.status(500).json({message: "Failed to create resource", error: error.message})
  }
})

//Updating one
resourceRoutes.route("/resources/:id").put(verifyToken, async (request, response) => {
  let db = database.getDb()
  let mongoObject = {
    $set: {
      name: request.body.name,
      type: request.body.type, 
      description: request.body.description,
      brand: request.body.brand,
      createdBy: request.body.createdBy,
    }
  }
  let data = await db.collection("resources").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
  response.json(data)
})

//Delete one resource
resourceRoutes.route("/resources/:id").delete(verifyToken, async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("resources").deleteOne({_id: new ObjectId(request.params.id)})
  response.json(data)
})

function verifyToken(request, response, next){ 
  const authHeaders = request.headers["authorization"]
  //splitting token from Bearer 
  const token = authHeaders && authHeaders.split(' ')[1]
  if(!token){
    return response.status(401).json({message: "Authentication token is missing"})
  }

  jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
    if(error){
      return response.status(403).json({message: "Invalid Token"})
    }

    request.body.user = user //if token validation goes through then we add user to request body incase we want to use it
    next() //telling express to go to backend routes
  } 
  )
}

module.exports = resourceRoutes