// Need to create a server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3001;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/add-todo', (req, res) => {
  // const todo = req.param
  const data = req.body;
  console.log(data)
  // res.send({ text: "welcome" })
})

app.get('/todos', (req, res) => {
  res.json({
    data : {
      todos: [{topic: 'A', description: 'cat', id: 76765, isCompleted: false}]
    }
  })
})

app.listen(PORT)




