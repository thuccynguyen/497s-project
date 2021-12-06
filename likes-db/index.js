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
    console.log("Recieved like", type);

    if (type == "PostLiked")
    {
        const {id, liked, total_likes} = data;
        const text = 'INSERT INTO likes VALUES ($1, $2, $3)';
        const values = [id, liked, total_likes];
        await client.query(text, values);
    }

    res.send({});
});

app.listen(4009, () =>
{
    console.log("Listening on port 4009");
});