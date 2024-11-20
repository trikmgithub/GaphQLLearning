const {books, authors} = require('../data/static')

const resolver = {
    //Query
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id.toString() === args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author => author.id.toString() === args.id),
    },
    Book: {
        author: (parent, args) => {
            return authors.find(author => author.id.toString() === parent.authorId)
        }
    },
    Author: {
        books: (parent, args) => {
            return books.filter(book => book.authorId.toString() === parent.id)
        }
    },

    //Mutation
    Mutation: {
        createAuthor: (parent, args) => args,
        createBook: (parent, args) => args
    }
}

module.exports = resolver