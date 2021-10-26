const express = require('express')
const cors = require('cors')
const crypto = require('crypto');
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

const users = {};
const userId = 0;

app.get('/create/:id', function(req, res){
    res.status(200).send(users)
})

app.post('/create', function(req, res){
    userId = crypto.randomBytes(6).toString("hex");

    const username = req.body.username;
    const password = req.body.password;

    users[userId] = {
        id: userId,
        uName: username,
        pWord: password
    };

    res.status(200).send(users[id])
})

app.listen(5000, function(){
    console.log("Server listening on port 5000")
})
