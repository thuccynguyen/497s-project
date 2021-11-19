const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const users = ["User"]

app.get('/users', (req, res) => 
{
    res.send(users)
    res.status(200).send()
})

app.post('/validate/null', function(req, res)
{
    const username = req.body.username;
    const password = req.body.password;

    if (username == "")
    {
        res.send("Username required");
        res.status(400).send()
    }
    else if (password == "")
    {
        res.send("Password required");
        res.status(400).send()
    }
    else if (username == "" && password == "")
    {
        res.send("Username and password required");
        res.status(400).send()
    }
    else
    {
        res.send("Valid signup");
        res.status(400).send()
    }
})

app.post('/validate/username', function(req, res)
{
    const username = req.body.username;

    for (var i = 0; i < users.length; i++)
    {
        if(users[i] == username)
        {
            res.send("Username already taken");
            res.status(400).send()
        }
        else
        {
            res.send("Valid username");
            res.status(200).send()
        }
    }
})

app.listen(4002, function()
{
    console.log("Server listening on port 4002")
})