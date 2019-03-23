const mongoose = require("mongoose")

mongoose.set('debug', true);
mongoose.Promise = Promise
mongoose.connect("mongodb://user101:lahuser@ds115701.mlab.com:15701/lah")

module.exports.User = require("./user")
