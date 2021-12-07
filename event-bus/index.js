const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(`[event-bus] Received Event ${event.type}`);
  console.log(`[event-bus] Sending Event ${event.type} To All Services`);

  // auth
  axios.post("http://auth:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  // createUser
  axios.post("http://create-account:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  // validateAccount
  axios.post("http://validate-account:4002/events", event).catch((err) => {
    console.log(err.message);
  });

  // manageUserState
  axios.post("http://manage-user-state:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  // createPost
  axios.post("http://posts:4004/events", event).catch((err) => {
    console.log(err.message);
  });

  // addComment
  axios.post("http://comments:4005/events", event).catch((err) => {
    console.log(err.message);
  });

  // likes
  axios.post("http://likes:4006/events", event).catch((err) => {
    console.log(err.message);
  });

  // // userPosts
  // axios.post("http://localhost:4007/events", event).catch((err) => {
  //   console.log(err.message);
  // });

  // comments-db
  axios.post("http://comments-db:4008/events", event).catch((err) => {
    console.log(err.message);
  });

  // // likes-db
  // axios.post("http://likes-db:4009/events", event).catch((err) => {
  //   console.log(err.message);
  // });

  // // posts-db
  // axios.post("http://posts-db:4010/events", event).catch((err) => {
  //   console.log(err.message);
  // });

  // // users-db
  // axios.post("http://users-db:4011/events", event).catch((err) => {
  //   console.log(err.message);
  // });

  res.send({ status: "OK" });
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});