const data = require('../fakeData.js')
const {User,ComDetails} = require('../Mongodb/userProfile')
const mongoose = require('mongoose')
const resolver = {
      Query:{
            async getAllUser(){
                  return await data;
                  console.log(data.user)
            },
           async getUser(obj,args,context,info){
                  return await data.find(user=> user.id === args.id)
            }
      },

      Mutation:{
            async createUser(parent,arg){
                  let newUser = await arg
                  const user =  await new User({
                        "id": arg.id,
                        "name": arg.name,
                        "mail": arg.mail,
                        "dob": arg.dob,
                        "comName": arg.comName,
                        "duration": arg.duration,
                        "skills": arg.skills,

                  })

                  // user.save(function(err){
                  //       if(err) return console.log(err);
                  //   })


                  user.save()
                  // .then(useRef=>{
                  //       const comDetails =  new ComDetails({
                  //             "comName": arg.comName,
                  //             "duration": arg.duration
                  //       })
                  // })
                  // user.i

                  data.push(newUser)
                  return newUser;
            }
      }
}
module.exports = resolver 