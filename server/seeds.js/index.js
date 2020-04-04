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

const seedDatabase = async() => {
    // const hashedPassword = await bcrypt.hash('hunter12', 10);
    // const user = new User({username: 'test123', password: hashedPassword});
    // await user.save();

    const categoriesArr = [];
    for(let i = 0; i < 10; i++){
        const category = new Category({name: Faker.Book.title()});
        await category.save();
        categoriesArr.push(category._id);
    }

    const optionsArr = [];
    for(let j = 0; j < 70; j++){
        const option = new Option({title: Faker.Lorem.word()});
        await option.save();
        optionsArr.push(option._id);
    }

    for(let k = 0; k < 40; k++) {
        let options = [];
        for(let l = 0; l < 4; l++){
            let option = optionsArr[Math.floor(Math.random() * optionsArr.length)];
            options.push(option);
        }
        let answerId = options[Math.floor(Math.random() * options.length)];
        const option = await Option.findById(answerId);
        const answer = new Answer({title: option.title})
        await answer.save();
        let category = categoriesArr[Math.floor(Math.random() * categoriesArr.length)];
        let title = Faker.Lorem.sentence()
        const question = new Question({title, answer: answer._id, category, options});
        await question.save();
    }
    mongoose.connection.close();
}

seedDatabase().then(() => console.log('Successfully seeded database')).catch((e) => console.log('An error occured while seeding', e))
