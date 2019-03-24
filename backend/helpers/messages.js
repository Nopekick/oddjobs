const jwt = require('jsonwebtoken');
const db = require('../models');

//body should contain sender name, sender email, content, recipient name
exports.sendMessage = async function(req, res, next){
  let message = db.Message.create(req.body)
  db.User.findById(req.params.recipientId)
  .then((user)=>{
    user.inbox.push(message)
    user.save()
    return res.status(200).json({'Message': 'Message Sent'})
  }).catch((err)=>{
      next({message: err, status: 400})
  })
}

exports.getUserInfo = async function(req, res, next){
  db.User.findById(req.params.id)
  .then((user)=>{
    return res.status(200).json({user})
  }).catch((err)=>{
      next({message: err, status: 400})
  })
}

exports.getMessages = async function(req, res, next){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
    const token = req.headers.authorization.split(" ")[1]
    let decoded = jwt.decode(token)

    db.Message.find({recipient: decoded._id}).populate('sender').exec()
    .then((messages)=>{
      console.log("reached inside of message.find")
      return res.status(200).json({messages})
    }).catch((err)=>{
        next({message: err, status: 407})
    })
  }
  next({message: 'Did not work', status: 405})
}


exports.getAllJobs = async function(req, res, next){
  db.Opening.find().populate('employer').exec()
  .then((jobs)=>{
    return res.status(200).json({jobs})
  }).catch((err)=>{
      next({message: err, status: 400})
  })
}

exports.getAllEmployers = async function(req, res, next){
  db.User.find({category: 'Employer'})
  .then((employers)=>{
    return res.status(200).json({employers})
  }).catch((err)=>{
      next({message: err, status: 400})
  })
}

exports.createOpening = async function(req, res, next){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
    const token = req.headers.authorization.split(" ")[1]
    let decoded = jwt.decode(token)
    req.body.employer = decoded._id

    db.Opening.create(req.body).then((opening)=>{
      return res.status(200).json({Message: 'created job opening'})
    }).catch((err)=>{
        next({message: err, status: 400})
    })
  }
  next({message: 'Did not work', status: 400})
}
