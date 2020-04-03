const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Option', OptionSchema);