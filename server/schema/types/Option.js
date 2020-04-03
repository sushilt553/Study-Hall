const mongoose = require('mongoose');

const typeDefs = `
    type Option {
        _id: ID!
        title: String!
    }
`

const resolvers = {}

module.exports = {
    typeDefs,
    resolvers
}