const { RESTDataSource } = require('apollo-datasource-rest');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class Speaker extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000/speakers';
    }

    async getSpeakerById(id) {
        const data = await this.get(`/${id}`);
        return data;
    }

    async getSpeakers() {
        const data = await this.get('/')
        return data;
    }
}

module.exports = SpeakerAPI;   