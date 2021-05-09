const express = require('express')
const mongoose = require('mongoose')
const AuthRoute = require('./routes/authRoutes')
const {mongoUrl} = require('./keys')
const bodyParser = require('body-parser')

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db= mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})

db.once('open', ()=>{
console.log('Database connection Established...')
})

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/Api',AuthRoute)
