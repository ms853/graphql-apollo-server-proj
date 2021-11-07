import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'

import { TodoResolver } from '../src/resolver/todoResolver'

/**
 * Function for initializing graphql apollo server.
 * Configuring resolvers.
 */
async function main() {

 

  const app = express();

  const schema = await buildSchema({
    resolvers: [TodoResolver],
    emitSchemaFile: true,
  });
  
  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app })

  app.listen(4000, () =>
    console.log('Server is running on http://localhost:4000/graphql')
  )
}

main()