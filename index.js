const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const  typeDefs  = require('./Graphql/schema')
const resolvers  =require('./Graphql/Resolvers')
const { ApolloServer,gql} = require('apollo-server-express');
const { MongoClient } = require('mongodb');
const port = 3000

const server = new ApolloServer({ typeDefs, resolvers });

 async function DatabaseStart(){
  const uri = "mongodb+srv://smturag:turag123@cluster0.l40h1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
  const collection = client.db("test").collection("devices");

  if(err){console.log(err)}else{
    async function start(){  
      await server.start()
      server.applyMiddleware({app})
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}/graphql`)
      })
    }
    console.log('connected')
    start()
  }
  client.close();
});

}

async function startAll(){
  await DatabaseStart()
}

startAll()
