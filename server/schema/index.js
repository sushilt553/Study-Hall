const mongoose = require('mongoose');
const { merge } = require('lodash')
const { makeExecutableSchema } = require('graphql-tools');
const types = require('./types');

const otherTypeDefs = `
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
`

const otherResolvers = {
    Query: {
        _empty(_, __){
            return "";
        }
    },
    Mutation: {
        _empty(_, __){
            return "";
        }
    }
}

const typeDefs = [...types.map(type => type.typeDefs), otherTypeDefs]
const resolvers = merge(...types.map(type => type.resolvers), otherResolvers)

module.exports = {
   schema: makeExecutableSchema({
        typeDefs,
        resolvers,
        logger: { log: e => console.log('\x1b[31m%s\x1b[0m', e.message) }
    }),
    typeDefs,
    resolvers
}