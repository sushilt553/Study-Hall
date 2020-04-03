const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Category = mongoose.model('Category');
const Answer = mongoose.model('Answer');
const Option = mongoose.model('Option');

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

    extend type Mutation {
        createQuestion(
            title: String!,
            category: String!,
            options: String!,
            answer: String!): Question
    }
`

const resolvers = {
    Query: {
        allQuestions(_, __){
            return Question.find({});
        }
    },
    Mutation: {
        createQuestion: async(_, { title, category, options, answer }) => {
            
            const existingCategory = await Category.findOne({name: category.toLowerCase()});
            if (existingCategory){
                category = existingCategory._id;
            }else{
                const newCategory = new Category({name: category.toLowerCase()});
                await newCategory.save();
                category = newCategory._id;
            }

            const optionsArr = options.split(",");
            const optionsId = [];
            for(let i = 0; i < optionsArr.length; i++) {
                let existingOption = await Option.findOne({title: optionsArr[i].toLowerCase()});
                if (existingOption){
                    optionsId.push(existingOption._id);
                }else{
                    const newOption = new Option({title: optionsArr[i].toLowerCase()});
                    await newOption.save();
                    optionsId.push(newOption._id);
                }
            }
            
            const existingAnswer = await Answer.findOne({title: answer.toLowerCase()});
            if (existingAnswer) {
                answer = existingAnswer._id;
            }else{
                const newAnswer = new Answer({title: answer.toLowerCase()});
                await newAnswer.save();
                answer = newAnswer._id;
            }
            const question = new Question({title, category, options: optionsId, answer});
            await question.save();
            return question;
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