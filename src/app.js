const express = require('express')
const morgan = require("morgan")
const app = express()
//modularizar, llamar archivo para que funcione con el principal
const register=require("./controllers/register")
const login=require("./controllers/login")
const updateUsers=require("./controllers/updateUsers")
const getUser=require("./controllers/getUser")
const {getAllusers} = require("./dv");
app.use(morgan("dev"))
app.use(express.json());

app.get("/users", (req, res) => {
    res.json({ users: getAllusers() });
 });
//registre
app.post("/register",register)
//login
app.post("/login",login)
//update user
app.put("/user/:id",updateUsers)
//get user
app.get("/user/:id",getUser)


module.exports=app
