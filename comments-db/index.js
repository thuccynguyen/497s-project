const express = require("express");
const cors = require("cors");
const axios = require("axios");
const {Client} = require("pg");

const app = express();
app.use(express.json());
app.use(cors());

const client = new Client
({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: "5432"
});

client.connect();

app.post("/events", async (req, res) => 
{
    const {type, data} = req.body;
    console.log("Recieved comment", type);

    if (type == "CommentCreated")
    {
        const {commentId, postId} = data;
        const text = 'INSERT INTO comments VALUES ($1, $2)';
        const values = [commentId, postId];
        await client.query(text, values);
    }

    res.send({});
});

app.listen(4008, () =>
{
    console.log("Listening on port 4008");
});