const express = require("express")
const { SignUp, logIn } = require("../controller/auth.controller")

const authRouter = express.Router()

authRouter.post("/auth/signUp", SignUp)

authRouter.post("/auth/logIn", logIn)

module.exports = authRouter