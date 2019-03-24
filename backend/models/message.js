const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
  sender: {
    type: String
  },
  senderEmail: {
    type: String
  },
  content: {
    type: String
  }
})


module.exports = mongoose.model("Message", messageSchema)
