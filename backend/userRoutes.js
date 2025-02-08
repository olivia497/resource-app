const express = require("express")
const database = require("./connect.js")
const ObjectId = require("mongodb").ObjectId
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})

let userRoutes = express.Router()
const SALT_ROUNDS = 6

//Retrieve All
userRoutes.route("/users").get(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("users").find({}).toArray()
  if (data.length > 0){
    response.json(data)
  }else{
    throw new Error("No data found")
  }
})

//Retrieve One
userRoutes.route("/users/:id").get(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("users").findOne({_id: new ObjectId(request.params.id)})
  if (Object.keys(data).length > 0){
    response.json(data)
  }else{
    throw new Error("No data found")
  }
})

//Create a new user
userRoutes.route("/users").post(async (request, response) => {
  let db = database.getDb()

  console.log("Received user data:", request.body) //Debugging

  //Confirm if email was already used 
  const takenEmail = await db.collection("users").findOne({email: request.body.email})
  
  if(takenEmail){
    response.json({message: "That email is taken"})
  }else{
     //Hash method from bcrypt to encrypt password
  const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS)

  let mongoObject = {
    userName: request.body.userName,
    email: request.body.email, 
    password: hash,
    resourcesAddedByUser: []
  }
  let data = await db.collection("users").insertOne(mongoObject)
  response.json(data)
  }
})

//Updating one
userRoutes.route("/users/:id").put(async (request, response) => {
  let db = database.getDb()
  let mongoObject = {
    $set: {
      userName: request.body.userName,
      email: request.body.email, 
      password: request.body.password,
      resourcesAddedByUser: request.body.resourcesAddedByUser
    }
  }
  let data = await db.collection("users").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
  response.json(data)
})

//Delete one resource
userRoutes.route("/users/:id").delete(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("users").deleteOne({_id: new ObjectId(request.params.id)})
  response.json(data)
})

//Login 
userRoutes.route("/users/login").post(async (request, response) => {
  let db = database.getDb()

  //Confirm if email was already used 
  const user = await db.collection("users").findOne({email: request.body.email})
  
  if(user){
    let confirmation = await bcrypt.compare(request.body.password, user.password)
    if(confirmation){ //If user is found 
      const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: "1h"}) //create token and encodes user data into the token, allows us to save stored user information
      response.json({success: true, token})
    }else{
      response.json({success:false, message: "Incorrect Password"})
    }
  }else{ //Email not found
    response.json({success: false, message: "User not found"})
  }
})

module.exports = userRoutes