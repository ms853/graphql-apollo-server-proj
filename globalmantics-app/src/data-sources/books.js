const bookData = require('../../data/books.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class BookAPI extends DataSource {
    constructor() {
        super();
    }

    getBooks(args) {
        return _.filter(bookData, args);
    }

}