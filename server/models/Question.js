const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    options: [{
        type: Schema.Types.ObjectId,
        ref: 'Option',
        required: true
    }],
    answer: {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        required: true
    }
})

module.exports = mongoose.model('Question', QuestionSchema);