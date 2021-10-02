const data = require('../fakeData.js')
const resolver = {
      Query:{
            getAllUser(){
                  return data;
                  console.log(data.user)
            },
            getUser(obj,args,context,info){
                  return data.find(user=> user.id === args.id)
            }
      },

      Mutation:{
            createUser(parent,arg){
                  let newUser = arg
                  data.push(newUser)
                  return newUser;
            }
      }
}
module.exports = resolver 