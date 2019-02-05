const mongoose = require('mongoose')
mongoose.set('debug', true)

const Profile = new mongoose.Schema({
    firstName: {type:String, trim:true, default:''}, // trim is for 'bob' ' bob'
    lastName: {type:String, trim:true, default:''},
    age: {type:Number, default:0},
    team: {type:String, trim:true, default:''},
    position: {type:String, trim:true, default:''},
})

module.exports =  mongoose.model('Profile', Profile)