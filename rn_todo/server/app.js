// Need to create a server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser())

app.get('/', (req, res) => {
  res.send('Ashish')
})

app.use('/onboarding', (req, res) => {
  res.send("Onboarding")
})

app.use('/add-todo', (req, res) => {
  res.send('Add Todo page')
})
app.listen(3001)




