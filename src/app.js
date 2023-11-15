const express = require('express')
const morgan = require("morgan")
const app = express()
//modularizar, llamar archivo para que funcione con el principal
const register=require("./controllers/register")
const login=require("./controllers/login")
const updateUser=require("./controllers/updateUser")
const getUser=require("./controllers/getUser")


app.use(morgan("dev"))
const users = [];
//registre
app.post("/register",register)
//login
app.post("/login",login)
//update user
app.put("/user/:id",updateUser)
//get user
app.get("/user/:id",getUser)


module.exports=app
