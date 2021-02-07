const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  task: {type: String, required: true},
  isCompleted: {type: Boolean, required: true},
  created: {type: Date, required: true, default: Date.now},
  updated: {type: Date, required: true, default: Date.now},
});

module.exports = mongoose.model('Todo', todoSchema);
