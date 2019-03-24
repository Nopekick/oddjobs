const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})


module.exports = mongoose.model("Message", messageSchema)
