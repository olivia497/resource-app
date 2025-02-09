const express = require("express")
const database = require("./connect.js")
const ObjectId = require("mongodb").ObjectId

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
  let id = request.params.id;
  if (!ObjectId.isValid(id)) {
    return response.status(400).json({ error: "Invalid ObjectId" });
  }
  let db = database.getDb();
  let data = await db.collection("resources").findOne({_id: new ObjectId(id)});
  if (data) {
    response.json(data);
  } else {
    response.status(404).json({ error: "Resource not found" });
  }
});


//Create a new resource
resourceRoutes.route("/resources").post(async (request, response) => {
  let db = database.getDb()
  let mongoObject = {
    name: request.body.name,
    type: request.body.type, 
    description: request.body.description,
    brand: request.body.brand,
    createdBy: request.body.createdBy
  }
  let data = await db.collection("resources").insertOne(mongoObject)
  response.json(data)
})

//Updating one
resourceRoutes.route("/resources/:id").put(async (request, response) => {
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
resourceRoutes.route("/resources/:id").delete(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("resources").deleteOne({_id: new ObjectId(request.params.id)})
  response.json(data)
})

module.exports = resourceRoutes