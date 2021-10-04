const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
      id:{
            type: String,
            required:true,
      },
      name:{
            type: String,
            required:true,
      },
      mail:{
            type: String,
            required:true,
      },
      dob:{
            type: String
      },
      skills:{
            type: [String],
      },
      experiences:{
            type: mongoose.Types.ObjectId,
            ref: 'extraSchema'
}})


      const User = mongoose.model('user',userSchema)
      

const extraSchema = mongoose.Schema({
            comName:{
                  type: String,

            },
            duration:{
                  type: Number
            }
      })

      const ComDetails = mongoose.model('comDetails',extraSchema)
      module.exports = {User,ComDetails}
