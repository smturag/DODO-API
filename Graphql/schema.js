const { gql } = require('apollo-server-express');

let schema= gql`
type User{
      id: Int!
      name: String!
      mail: String!
      dob: String
      skills: [String]
      experiences: [extra]
      address: String
}
type extra{
      comName: String
      duration: String
}

type Query {
      AllUser: [User]!
}

input extraInput{
      comName: String
      duration: String
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