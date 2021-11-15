//const { } = require('apollo-server');
const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionsAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {}

    getSessions = () => {
        return sessions;
    }

    getSessionById(id) {
        const foundSession = sessions.filter((session) => {
            session.id === parseInt(id)
        });
        return foundSession[0];
    }
}

module.exports = SessionsAPI;

