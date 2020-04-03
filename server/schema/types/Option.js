const mongoose = require('mongoose');

const typeDefs = `
    type Option {
        _id: ID!
        title: String!
    }
    extend type Query {
        _empty: String
    }
    extend type Mutation {
        _empty: String
    }
`

const resolvers = {
    Query: {
        _empty(_, __){
            return ""
        }
    },
    Mutation: {
        _empty(_, __){
            return ""
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}