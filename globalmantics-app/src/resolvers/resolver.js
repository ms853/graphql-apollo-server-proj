const bookData = require('../../data/books.json');
const sessionDataset = require('../../data/sessions.json');
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
module.exports = resolvers = {
    Query: {
      books: () => bookData,
      //TODO Complete function
      sessions: (parent, args, ) => sessionDataset
    },
  };


