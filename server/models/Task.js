const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
    }
})

const Task = mongoose.model('Test', TaskSchema);
module.exports = Task;