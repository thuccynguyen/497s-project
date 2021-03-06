const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const comments = {};

app.get('/comments', function (req, res) {
  res.status(200).send(comments);
})

app.get("/posts/:id/comments", (req, res) => {
  const id = req.params.id;

  res.send(comments[id]);
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log("Event Received:", req.body.type);

  if (type === "PostCreated") {
    const { pId } = data;

    comments[pId] = { pid: pId, commentId: 0, comment: "" };
  }

  res.send(comments);
});

app.post("/posts/:id/comments", async (req, res) => {
  const id = req.params.id;
  const commentId = crypto.randomBytes(6).toString("hex");
  const comment = req.body.content;

  comments[id] =
  {
    commentId: commentId,
    postId: id,
    comment: comment,
    status: "Created"
  };

  await axios.post("http://event-bus:5000/events",
    {
      type: "CommentCreated",
      data:
      {
        commentId: commentId,
        postId: id,
        comment: comment,
        status: "Created",
      },
    });

  res.status(200).send(comments[id]);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
