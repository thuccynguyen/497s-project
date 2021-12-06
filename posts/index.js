const express = require("express");
const cors = require("cors");
const axios = require("axios");
const crypto = require('crypto');
const { readdirSync } = require("fs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cors());

posts = {};

function filterObject(obj, callback) {
    return Object.fromEntries(Object.entries(obj).
      filter(([key, val]) => callback(val, key)));
  }

app.post("/events", function(req, res){
    const { type, data } = req.body;
    console.log("Event Received:", req.body.type);

    res.send(posts);
})

app.post('/user/:id/create', async function(req, res){
    userId = req.params.id;
    postId = crypto.randomBytes(6).toString("hex");
    postTag = req.body.tag
    const content = req.body.content;
    
    posts[userId] = {
        pId: postId,
        pContent: content,
        pTag: postTag
    };

    await axios.post('http://localhost:5000/events', {
        type: 'PostCreated',
        data: {
            uId: userId,
            pId: postId,
            pContent: content,
            pTag: postTag

        },
    });

    res.status(200).send(posts[userId]);
})

app.get('/posts', function(req, res){
    res.status(200).send(posts);
})

app.get('/user/:id/posts', function(req, res){
    res.status(200).send(posts[req.params.id]);
})

app.get('/filter/:tag', function(req, res) {
   const filtered = Object.fromEntries(
    Object.entries(posts).filter(([key, value]) => value.tag === req.body.param) )
    console.log(filtered)
    res.status(200).send(filtered)
})

app.listen(4004, function(){
    console.log('Listening on port 4004');
})