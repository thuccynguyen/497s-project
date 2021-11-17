const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const axios = require("axios");

app.use(cors());
app.use(express.json())


const users = [];

app.get('/users', (req, res) => {
  res.json(users);
  res.status(200).send();
})

app.post('/user', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
})

app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.username === req.body.username)
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {

      res.send('Success');
    } else {
      res.send('Not Allowed');
    }
  } catch {
    res.status(500).send();
  }
      await axios.post('http://localhost:5000/events', {
        type: 'UserAuth',
        data: {
          id: commentId,
          user: username,
          password: hashedPassword
        }
      });

});

app.post('/events', (req, res) => {
  console.log('Event Received:', req.body.type);

  res.send({});
});

app.listen(4000);

