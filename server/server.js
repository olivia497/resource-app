const express = require("express");
const connectDB = require("./config/db");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB(); // Connect to MongoDB

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // React frontend URL
  credentials: true,
}));

// Session Middleware
app.use(session({
  secret: "your_secret_key",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: "sessions"
  }),
  cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
}));

// Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("🚀 Server running on port 8000");
});
