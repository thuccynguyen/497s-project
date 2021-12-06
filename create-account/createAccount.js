const express = require('express')
const cors = require('cors')
const crypto = require('crypto');
const app = express()
const axios = require('axios')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

const users = {};


app.post("/events", function(req, res){
    const { type, data } = req.body;
    console.log("Event Received:", req.body.type);

    res.send(users);
})

app.get('/user/:id', function(req, res){
    res.status(200).send(users[req.params.id])
})

app.post('/user', async function(req, res){
    const userId = crypto.randomBytes(6).toString("hex");

    const username = req.body.username;
    const password = req.body.password;


    users[userId] = {
        id: userId,
        uName: username,
        pWord: password
    };

    try {
    await axios.post('http://localhost:5000/events', {
        type: 'UserCreated',
        data: {
            id: userId,
            uName: username,
            pWord: password
        },
    });
    }
    catch (e) {
        console.log('There was an error');
        console.log(e.message);
        res.status(404).send({});
        return;
      }
      
    res.status(200).send(users[userId])
})

app.listen(4001, function(){
    console.log("Listening on port 4001")
})
