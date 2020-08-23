// Need to create a server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { uuid } = require('uuidv4');


const PORT = 3001;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let todos = []

app.post('/add-todo', (req, res) => {
  const { body } = req;

  const newTodo = {
    topic: body.topic,
    description: body.description,
    isCompleted: false,
    id: uuid()
  }
  // console.log(newTodo)
  todos.push(newTodo);

  res.end()
})

app.get('/todos', (req, res) => {
  res.json({
    data: {
      todos
    }
  })
})

app.delete('/delete-todo', (req, res) => {
  const { body } = req;
  // console.log(body)

  todos = (todos.filter((todo) => todo.id !== body.id))
  // console.log(todos)
  res.end();
})

app.listen(PORT)




