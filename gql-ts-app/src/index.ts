import { ApolloServer, gql } from 'apollo-server';
import * as sessionDataset from '../data/sessions.json';
const typeDefs = gql`

type Query {
    sessions: [Session]
}     

type Session {
    id: ID!,
    title: String,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String
}
`
const resolver : any = {
    sessions: sessionDataset 
};
   
const server : ApolloServer = new ApolloServer({ typeDefs });

server.listen({ port: process.env.PORT || 4000 })
.then((url) => { console.log(`graphql server is running on ${url.port}`)}); 