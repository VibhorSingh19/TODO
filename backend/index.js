const express= require('express')
const app = express()
const PORT=3000
const {mongoUrl} = require('./keys')

const mongoose=require('mongoose')

require('./models/User');
const authRouter = require('./routes/authRoutes')

app.use(authRouter);

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo ")
})




app.post('/',(req,res)=>{

    res.send('hello')
})

app.listen(PORT,()=>{
    console.log("server running.."+PORT)
})