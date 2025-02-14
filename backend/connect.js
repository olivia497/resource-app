//responsible for connecting us to MongoDB

const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({path: "./config.env"});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database;

module.exports = {
  //creates the initial connection between code and resourceApp database
  connectToServer: () => {
    database = client.db("resourceApp");
  },
  //use getDb function to get data back to us
  getDb: () => {
    return database;
  }
};
