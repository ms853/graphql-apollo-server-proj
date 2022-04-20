const _ = require('lodash');

module.exports = {
    books: (parent, args, { dataSources }, info) => {
        return dataSources.bookAPI.getBooks(args)
    },
    sessions: (parent, args, { dataSources }, info) => {
       return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
       return dataSources.sessionAPI.getSessionById(id);
    },
    speakers: (parent, args, { dataSources }, info) => {
        return dataSources.speakerAPI.getSpeakers();
    },
    speakerById: (parent, args, { dataSources }, info) => {
        return dataSources.speakerAPI.getSpeakerById(id);
    }
}