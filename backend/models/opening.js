const mongoose = require("mongoose")

const openingSchema = new mongoose.Schema({
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  pay: {
    type: String
  },
  timeEstimate: {
    type: String
  }
})


module.exports = mongoose.model("Opening", openingSchema)
