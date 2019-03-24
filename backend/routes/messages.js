const express = require("express");
const router = express.Router();
const {sendMessage, getUserInfo, getMessages, getAllStudents, getAllEmployers} = require("../helpers/messages")

router.post("/send/:recipientId", sendMessage)
router.get("/users/:id", getUserInfo)
router.get("/users/:id/messages", getMessages)
// ^^ maybe add jwt check so that only a user can access their own messages

router.get("/employer/all", getAllEmployers)
router.get("/student/all", getAllStudents)


module.exports = router;
