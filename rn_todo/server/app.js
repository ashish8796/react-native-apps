// Need to create a server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3001;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Ashish')
})

app.use('/onboarding', (req, res) => {
  res.send("Onboarding")
})

app.post('/add-todo', (req, res) => {
  // const todo = req.param
  const data = req.body;
  console.log(data)
  // res.send({ text: "welcome" })
})
app.listen(PORT)




