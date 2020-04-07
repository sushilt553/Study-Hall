const mongoose = require('mongoose');
require('../models');
const db = require('../config/keys').mongoURI;

const bcrypt = require('bcryptjs');
const { Faker } = require('fakergem');

const User = mongoose.model('User');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const Option = mongoose.model('Option');
const Category = mongoose.model('Category');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected to mongoDB successfully'))
    .catch(err => console.log(err));

const seedQuestions = require("./Questions");
const seedAnswers = require("./Answers");
const seedOptions = require("./Options");
const seedCategories = require("./Categories");

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

const seedDatabase = async() => {
    // const hashedPassword = await bcrypt.hash('hunter12', 10);
    // const user = new User({username: 'test123', password: hashedPassword});
    // await user.save();

    const categoriesArr = [];
    for(let i = 0; i < seedCategories.length; i++){
        const category = new Category({name: seedCategories[i]});
        await category.save();
        categoriesArr.push(category._id);
    };

    const optionsArr = [];
    for (let j = 0; j < seedOptions.length; j++) {
        const option = new Option({title: seedOptions[j]});
        await option.save();
        optionsArr.push(option._id);
    };

    const answersArr = [];
    for(let k = 0; k < seedAnswers.length; k++) {
        const answer = new Answer({ title: seedAnswers[k] });
        await answer.save();
        answersArr.push(answer._id);
    };

    for (let i = 0; i < categoriesArr.length; i++) {
        let answer;
        let title;
        let category = categoriesArr[i];
        for(let l = 0; l < 10; l++){
            let options = [];
            for (let j = 0; j < 4; j++) {
                options.push(optionsArr[j]);
            }
            for (let k = 0; k < 4; k++) {
                optionsArr.shift();
            }

            shuffledOptions = shuffle(options);
            answer = answersArr[0];
            title = seedQuestions[0];

            seedQuestions.shift();
            answersArr.shift();

            const question = new Question({ title, answer, category, options: shuffledOptions })
            await question.save();
        };
    };

    // const categoriesArr = [];
    // for(let i = 0; i < categories.length; i++){
    //     const category = new Category({name: categories[i]});
    //     await category.save();
    //     categoriesArr.push(category._id);
    // }

    // const optionsArr = [];
    // for(let j = 0; j < 70; j++){
    //     const option = new Option({title: Faker.Lorem.word()});
    //     await option.save();
    //     optionsArr.push(option._id);
    // }

    // for(let k = 0; k < 40; k++) {
    //     let options = [];
    //     for(let l = 0; l < 4; l++){
    //         let option = optionsArr[Math.floor(Math.random() * optionsArr.length)];
    //         options.push(option);
    //     }
    //     let answerId = options[Math.floor(Math.random() * options.length)];
    //     const option = await Option.findById(answerId);
    //     const answer = new Answer({title: option.title})
    //     await answer.save();
    //     let category = categoriesArr[Math.floor(Math.random() * categoriesArr.length)];
    //     let title = Faker.Lorem.sentence()
    //     const question = new Question({title, answer: answer._id, category, options});
    //     await question.save();
    // }
    mongoose.connection.close();
}

seedDatabase().then(() => console.log('Successfully seeded database')).catch((e) => console.log('An error occured while seeding', e))
