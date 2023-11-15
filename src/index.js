const app=require("./app")
const config = require("./config")

app.listen(config.port,()=>{
    console.log(`servicio procesando en puerto ${config.port}`)
    
})