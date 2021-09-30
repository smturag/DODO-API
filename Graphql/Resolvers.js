const data = require('../fakeData.js')
const resolver = {
      Query:{
            AllUser(){
                  return data;
            }
      }
}
module.exports = resolver 