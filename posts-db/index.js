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
    host: "database",
    database: "postgres",
    password: "postgres",
    port: "5432"
});

client.connect();

app.post("/events", async (req, res) => 
{
    const {type, data} = req.body;
    console.log("Recieved post", type);

    if (type == "PostCreated")
    {
        const {uId, pId, pContent, pTag} = data;
        const text = 'INSERT INTO posts VALUES ($1, $2, $3, $4)';
        const values = [uId, pId, pContent, pTag];
        await client.query(text, values);
    }

    res.send({});
});

app.listen(4010, () =>
{
    console.log("Listening on port 4010");
});