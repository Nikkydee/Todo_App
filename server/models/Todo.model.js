const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
    trim: true
  },
  isCompleted: Boolean,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo