const express =  require(`express`)
const redis = require(`redis`)
const generateWelcomeMessage = require(`./generateWelcomeMessage`)

//redis database
const client = redis.createClient({
  host:`redis-server`,
  port: 6379
})

const PORT = 8090


//App
const app = express()

app.use(express.static(__dirname + `/public`));

app.get(`/`, (req,res)=>{
  res.render(`index`)
})

app.get(`/home`, (req,res)=>{
  client.get('visits', (err, visits)=>{
    res.send(generateWelcomeMessage(`Min`, visits))
    client.set(`visits`, Number(visits) + 1)
  })
})

app.listen(PORT)

console.log(`Running on port https://${PORT}`)