const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String
  }
})


module.exports = mongoose.model("Message", messageSchema)
