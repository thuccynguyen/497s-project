const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(`[event-bus] Received Event ${event.type}`);
  console.log(`[event-bus] Sending Event ${event.type} To All Services`);

  // auth
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  // createUser
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  // validateAccount
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });

  // manageUserState
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  // createPost
  axios.post("http://localhost:4004/events", event).catch((err) => {
    console.log(err.message);
  });

  // addComment
  axios.post("http://localhost:4005/events", event).catch((err) => {
    console.log(err.message);
  });

  // likes
  axios.post("http://localhost:4006/events", event).catch((err) => {
    console.log(err.message);
  });

  // userPosts
  axios.post("http://localhost:4007/events", event).catch((err) => {
    console.log(err.message);
  });

  // comments-db
  axios.post("http://localhost:4008/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "OK" });
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});