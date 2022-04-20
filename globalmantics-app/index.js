const { ApolloServer } = require('apollo-server');

const SessionAPI = require('./src/data-sources/sessions');

const resolvers = require('./src/resolvers/');
const typeDefs = require('./src/schema.js');


const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  //speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });