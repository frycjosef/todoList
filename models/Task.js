const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        require: true,
        default: Date.now()
    },
    done: {
        type: Boolean,
        require: true,
        default: false
    },
    author: {
        type: String,
        require: true
    }
});

module.exports = Task = mongoose.model('tasks', TaskSchema);