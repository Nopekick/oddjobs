const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  category: {
    type: String
  }
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  inbox: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }],
  bio: {
    type: String
  },
  interest: {
    type: String
  },
  lookingFor: {
    type: String
  },
  email: {
    type: String
  }
})

userSchema.pre('save', async function(next){
  try{
    if(!this.isModified("password")){
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword;
    return next();
  } catch(err){
      return next(err)
  }
})

userSchema.methods.comparePassword = async function(candidatePassword, next){
  try{
    let isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch;
  } catch(err){
    return next(err)
  }
}



module.exports = mongoose.model("User", userSchema)
