const express = require('express')
const app = express()
const  typeDefs  = require('./Graphql/schema')
const resolvers  =require('./Graphql/Resolvers')
const { ApolloServer,gql} = require('apollo-server-express');
const port = 3000

const server = new ApolloServer({ typeDefs, resolvers });

async function start(){
 
  await server.start()
  server.applyMiddleware({app})
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/graphql`)
  })
}
start()
