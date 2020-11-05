const express =  require("express")

const PORT = 8090
const HOST = "0.0.0.0"


//App
const app = express()

app.use(express.static(__dirname + '/public'));

app.get("/", (req,res)=>{
  res.render("index")
})

app.listen(PORT)

console.log(`Running on port https://${PORT}`)