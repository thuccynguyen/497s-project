const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

var curr_user = {id: "", password: ""}
var curr_state = "guest-user"

app.post('/login', async function (req, res) {
    const user = req.body.username;
    const pass = req.body.password;

    await axios.post("http://localhost:5000/events", {
        type: 'LoginAttempted',
        data: {
            username: user,
            password: pass
        }
    })

    res.status(200).send("Welcome " + user)
    

})

app.post('/logout', function(req, res) {
    curr_user.id = "";
    curr_user.password = "";
    curr_state = "guest-user"
    res.status(200).send("You have been logged out.")
})

app.listen(4003, function () {
  console.log('Listening on port 4003')
})

app.post('/events', (req, res) => {
    const {type, data} = req.body
    console.log('Event Received:', type)

    if (type === 'UserAuthorized') {
        curr_user.id = data.user;
        curr_user.password = data.password;
        curr_state = "active-user"
    }

    res.send({})
})

app.get('/user/account', function (req, res) {
    res.status(200).json(curr_user)
})

app.get('/user/state', function (req, res) {
    res.status(200).json(curr_state)
})

app.get('/restricted', function (req, res) {
    if (curr_state === "guest-user") {
        res.status(403).send("Please make an account to continue.")
    }

    else {
        res.status(200).send("Congratulations for making it here!")
    }
})

