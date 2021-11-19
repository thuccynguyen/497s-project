const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const axios = require("axios");

app.use(cors());
app.use(express.json())


const users = [{
  
}];


app.get('/users', (req, res) => {
  res.json(users);
  res.status(200).send();
})
  
app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.username === req.body.username);
  let authorized = false;
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      authorized = true;
      res.send('Success');
    } else {
      res.send('Not Allowed');
    }
  } catch {
    res.status(500).send();
  }
  

});

app.post('/events', async (req, res) => {

  const { type, data } =  req.body
  console.log('Event Received:', req.body.type);

    if (type === "UserCreated") {
      const uname = data.uName
      const pass = data.pWord
      bcrypt.genSalt(10, function (err, Salt) {
        bcrypt.hash(pass, Salt, function (err, hash) {
          if (err) {
            res.status(505).send();
          }
          const hashedPassword = hash;
          const user = { username: uname, password: hashedPassword };
          users.push(user);
        })
      })
    }

    if (type === "LoginAttempted") {
      const username = data.username
      const password = data.password
      const user = users.find(user => user.username === username);
      console.log(user)
      let authorized = false;
      if (user == null) {
        return res.status(400).send('Cannot find user');
      }
      
      if (await bcrypt.compare(password, user.password)) {
        authorized = true;
        console.log("Success")
        res.send('Success');
      } else {
        console.log("Not success")
        res.send('Not Allowed');
      }
  
      if(authorized){
        await axios.post('http://localhost:5000/events', {
          type: 'UserAuthorized',
          data: {
            // id: userId,
            user: username,
            password: password
          }
        });
      }
    }
  
});

app.listen(4000, function () {
  console.log('Listening on port 4000')
});



