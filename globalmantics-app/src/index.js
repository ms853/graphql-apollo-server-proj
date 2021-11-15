const { ApolloServer, gql } = require('apollo-server');
const SessionsAPI = require('../datasource/sessions')
//Type Definition object for defining a schema. 
const typeDefs = gql`
    type Query {
        sessions: [Session],
        sessionById: (id: ID): Session
    }

    type Session {
        id: ID!,
        title: String,
        description: String,
        startAt: String,
        endsArt: String,
        room: String,
        day: String,
        format: String,
        track: String,
        level: String
    }
`;

const resolvers = {
    Query: {
       sessions: (parent, args, {dataSources}, info) => {
           return dataSources.sessionAPI.getSessions();
       }, 
       sessionById: (parent, {id}, {dataSources}, info) => {
           return dataSources.sessionAPI.getSessionById(id);
       }
    }
};

const dataSources = () => {
    sessionsAPI : new SessionsAPI();
}

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.Port || 4000 }).then(({ url }) => {
        console.log(`graphQL running on ${url}`)
});