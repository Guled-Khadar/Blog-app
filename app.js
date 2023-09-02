require("dotenv").config()
const express = require("express")
const expressLayout = require("express-ejs-layouts")
const app = express()

const PORT = 3000 || process.env.PORT

// middleware
app.use(express.static(`public`)) 


// Template engine 
app.use(expressLayout)
app.set("layout", "./layouts/main")
app.set("view engine","ejs" )
app.use("/", require("./routes/route"))


app.listen(PORT, ()=> console.log(`App listening on port: ${PORT}`))