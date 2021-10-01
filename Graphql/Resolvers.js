const data = require('../fakeData.js')
const resolver = {
      Query:{
            AllUser(){
                  return data;
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