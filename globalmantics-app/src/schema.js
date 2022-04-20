const { gql } = require('apollo-server');

module.exports = gql`

# This "Book" type defines the queryable
# fields for every book in our data source.
    type Book {
        title: String
        author: String
    }

    type Speaker {
        id: ID!
        bio: String
        name: String
        feature: Boolean
        sessions: [Session]
    }

    type Session {
        id: ID!
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        @deprecated(
            reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future..."
        ) 
        level: String
        speakers: [Speaker]
    }

    type Query {
        books: [Book]
        sessions: [Session]
        sessionById(id: ID): Session
        speakers: [Speaker]
        speakerById(id: ID): Speaker
    }

    type Mutation {
        makeSpeakerFeatured(id: ID): Speaker
    }
`;