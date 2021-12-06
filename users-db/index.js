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
    console.log("Recieved login", type);

    if (type == "LoginAttempted")
    {
        const {userId,username, password} = data;
        const text = 'INSERT INTO users VALUES ($1, $2, $3)';
        const values = [userId, username, password];
        await client.query(text, values);
    }

    res.send({});
});

app.listen(4011, () =>
{
    console.log("Listening on port 4011");
});