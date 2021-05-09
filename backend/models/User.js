const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    }
},{timestamps:true})

const User=mongoose.model('User',userSchema);
module.exports=User