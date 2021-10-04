const { gql } = require('apollo-server-express');

let schema= gql`
#Schema
type User{
      id: ID!
      name: String!
      mail: String!
      dob: String
      skills: [String]
      experiences: [extra]
      address: String
}
type extra{
      comName: String
      duration: Int
}

type Query {
      getAllUser: [User!]!
      getUser(id: ID!): User
}


#Mutation
input extraInput{
      comName: String
      duration: Int
}

type Mutation{
      createUser(id: Int!,
      name: String!,
      mail: String!,
      dob: String,
      skills: [String],
      experiences: extraInput,
      address: String
      ): User!
}



`
module.exports =  schema 