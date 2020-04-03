const mongoose = require('mongoose');

const typeDefs = `
    type Answer {
        _id: ID!
        title: String!
    }
`

const resolvers = {}

module.exports = {
    typeDefs,
    resolvers
}