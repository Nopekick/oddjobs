const mongoose = require("mongoose")

mongoose.set('debug', true);
mongoose.Promise = Promise
mongoose.connect("mongodb://lahuser:user101@ds115701.mlab.com:15701/lah", { useNewUrlParser: true })

module.exports.User = require("./user")
module.exports.Message = require("./message")
