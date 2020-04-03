const mongoose = require('mongoose');
const User = mongoose.model('User');

const typeDefs = `
    type User {
        _id: ID!
        username: String!
        masteryPoints: Int
    }

    type UserCredentials {
        _id: ID!
        username: String!
        masteryPoints: Int
        token: String
        loggedIn: Boolean
    }

    extend type Query {
        me: User
    }

    extend type Mutation {
        login(username: String!, password: String!): UserCredentials
        signup(username: String!, password: String!): UserCredentials
    }
`;

const resolvers = {
    Query: {
        me(_, __, context){
            return context.user;
        }
    },

    Mutation: {
        login(_, {username, password}){
            return User.login(username, password);
        },
        signup(_, {username, password}){
            return User.signup(username, password);
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}