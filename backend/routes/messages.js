const express = require("express");
const router = express.Router();
const {sendMessage, getUserInfo, getMessages, getAllJobs, getAllEmployers, createOpening} = require("../helpers/messages")

router.post("/send/:recipientId", sendMessage)
router.get("/users/:id", getUserInfo)
router.get("/users/:id/messages", getMessages)
// ^^ maybe add jwt check so that only a user can access their own messages

router.get("/employer/all", getAllEmployers)
router.get("/jobs/all", getAllJobs)
router.post("/employer/create", createOpening)


module.exports = router;
