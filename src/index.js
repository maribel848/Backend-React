const express = require('express')
const config = require("./config")
const app = express()



app.get('/', function (req, res) {
  res.send('Hello World 102')
})

app.listen(config.port,()=>{
    console.log(`servicio procesando en puerto ${config.port}`)
    
})