// Need to create a server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { uuid } = require('uuidv4');
const db = require('./db');
const assert = require('assert');
const mongodb = require('mongodb')

const PORT = 3001;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/add-todo', async (req, res) => {
  const { body } = req;


  const newTodo = {
    topic: body.topic,
    description: body.description,
    isCompleted: false,
  }

  try {
    await (await db).collection('todos').insertOne(newTodo)

  } catch (e) {
    return res.status(400).json({
      msg: "Something went wrong"
    });
  }

  res.end()
})

app.get('/todos', async (req, res) => {

  const dbResponse = await (await db).collection('todos').find({}).toArray();

  res.json({
    data: {
      todos: dbResponse
    }
  })
})

app.delete('/delete-todo', async (req, res) => {
  const { body } = req;

  try {
    await (await db).collection('todos').deleteOne({ _id: mongodb.ObjectId(body.id) })
  } catch (e) {

    return res.status(400).json({
      msg: "Something went wrong"
    });
  }
  res.end();
})

app.put('/change-status', async (req, res) => {
  const { body } = req;

  try {
    const todo = await (await db).collection('todos').findOne({ _id: mongodb.ObjectId(body.id) });
    await (await db).collection('todos').findOneAndUpdate({ _id: mongodb.ObjectId(body.id) }, { $set: { isCompleted: !todo.isCompleted } });

  } catch (e) {
    return res.status(400).json({
      msg: "Something went wrong"
    });
  }

  res.end()
})

app.listen(PORT)




