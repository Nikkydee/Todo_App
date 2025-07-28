const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const Todo = require('../models/Todo.model')

router.get('/todos', (req, res) => {
  Todo.find().populate('userId', 'firstname lastname email')
    .then((todos) => {
      if (!todos) {
        return res.status(404).json({ message: "Todos not found" })
      }
      res.status(200).json({ todos: todos })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" })
    })
})

router.get('/:userid/todos', (req, res) => {
  const userId = req.params.userid
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" })
  }
  if (req.payload._id !== userId) {
    return res.status(403).json({ message: "You do not have the necessary authorization." })
  }

  Todo.find({ userId })
    .then((todos) => {
      if (!todos) {
        return res.status(404).json({ message: "Todos not found" })
      }
      res.status(200).json({ todos: todos })
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error fetching todos', error: err })
    })
})

router.put('/todos', (req, res) => {
  const { todo } = req.body
  
  Todo.findOneAndUpdate({ _id: req.payload._id }, { todos: todo })
    .then((updatedTodo) => {
      res.status(200).json({ todos: updatedTodo })
    })
})

router.post('/todos', (req, res) => {
  const { todo } = req.body

  if (!req.payload) {
    return res.status(401).json({ message: "Unauthorized" })
  }
  if (!todo || typeof todo !== 'string') {
    return res.status(400).json({ message: "Todo is required and must be a string" })
  }

  Todo.create({ task: todo, isCompleted: false, userId: req.payload._id })
    .then((createdTodo) => {
      res.status(201).json({ todo: createdTodo })
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" })
    })
})

router.delete('/todos/:todoId', (req, res) => {
  const todoId = req.params.todoId

  if (!todoId) {
    return res.status(400).json({ message: "Todo Id is required" })
  }

  const userId = req.payload._id;

  Todo.findOneAndDelete({ _id: todoId, userId })
    .then((deletedTodo) => {
      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" })
      }
      res.status(200).json({ message: "Todo deleted successfully" })
    })
    .catch((err) => {
      console.error(`Error deleting todo: ${err}`)
      res.status(500).json({ message: "Internal Server Error" })
    })
})

module.exports = router