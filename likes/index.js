const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

posts = {};
posts[7233] = {
  pid: 7233,
  liked: false,
  total_likes: 3,
};

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log("Event Received:", req.body.type);

  if (type === "PostCreated") {
     const { pId }= data;
    
    posts[pId] = { pid: pId, liked: false, total_likes: 0 };

    console.log(posts)
  }

  res.send(posts);
});

app.post("/posts/:id/like", async (req, res) => {
  if (!posts[req.params.id].liked) {
    posts[req.params.id].liked = true;
    posts[req.params.id].total_likes++;

    await axios.post("http://event-bus:5000/events", {
      type: "PostLiked",
      data: {
        id: req.params.id,
        liked: posts[req.params.id].liked,
        total_likes: posts[req.params.id].total_likes,
      },
    });

    res.status(200).send(posts[req.params.id]);
  } else res.status(403).send("You already liked the post!");
});

app.listen(4006, () => {
  console.log("Listening on 4006");
});
