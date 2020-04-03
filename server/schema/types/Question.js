const mongoose = require('mongoose');
const Question = mongoose.model('Question');

const typeDefs = `
    type Question {
        _id: ID!
        title: String!
        category: Category
        options: [Option]
        answer: Answer
    }

    extend type Query {
        allQuestions: [Question]
    }
`

const resolvers = {
    Query: {
        allQuestions(_, __){
            return Question.find({});
        }
    },
    Question: {
        category: async(parentValue, _) => {
            const question = parentValue;
            await question.populate("category").execPopulate();
            return question.category;
        },
        options: async(parentValue, _) => {
            const question = parentValue;
            await question.populate('options').execPopulate();
            return question.options;
        },
        answer: async(parentValue, _) => {
            const question = parentValue;
            await question.populate('answer').execPopulate();
            return question.answer;
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}