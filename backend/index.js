const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const db = require("./models")

const authRoutes = require("./routes/auth")
const messageRoutes = require("./routes/messages")

app.use(bodyParser.json())
app.use(cors())

app.use("/api/m/", messageRoutes)
app.use("/api/auth", authRoutes)

app.use(function(req, res, next){
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function errorHandler(error, req, res, next){
  return res.status(error.status || 500).json({
    error: {
      message: error.message || "Something went wrong."
    }
  })
})

//db.Opening.create({title: 'Tutor', pay: '$23/hr', timeEstimate: '1 hour', description: 'Help my son with calculus and proofread his essays', employer: '5c9718a7c8c4df4e22aa6109'})

app.listen(8081, function(){
  console.log("Starting on port 8081")
})
