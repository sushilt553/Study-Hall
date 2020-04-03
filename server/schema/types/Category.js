const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Question = mongoose.model('Question');

const typeDefs = `
    type Category {
        _id: ID!
        name: String!
        questions: [Question]
    }

    extend type Query {
        categories: [Category]
        category(_id: ID!): Category
    }
`

const resolvers = {
    Query: {
        categories(_, __) {
            return Category.find({});
        },
        category(_, { _id }){
            return Category.findById(_id);
        }
    },
    Category: {
        questions(parentValue, _) {
            return Question.find({category: parentValue._id});
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}