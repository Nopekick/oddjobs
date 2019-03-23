const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
  sender: {
    type: String
  },
  recipient: {
    type: String
  },
  content: {
    type: String
  }
})


module.exports = mongoose.model("User", userSchema)
