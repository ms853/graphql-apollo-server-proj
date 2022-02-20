const sessions = require('../../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSources {
    constructor() {
        super(); //call base constructor. 
    }

    initialize(config) {}

    getSessions(args) {
        return _.filter(sessions, args);
    }

    getSessionsById(id) {
        const session = sessions.filter((session) => session.id === parseInt(id));
        return session;
    }
}

module.exports = SessionAPI;