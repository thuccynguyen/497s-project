const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

var curr_user = {id: "", password: ""}
var curr_state = "guest-user"

app.post('/login', function (req, res) {
    const user = req.body.id;
    const pass = req.body.password;
    curr_user.id = user;
    curr_user.password = pass;
    curr_state = "active-user"
    res.status(200).send("Welcome, " + curr_user.id + "!")

})

app.post('/logout', function(req, res) {
    curr_user.id = "";
    curr_user.password = "";
    curr_state = "guest-user"
    res.status(200).send("You have been logged out.")
})

app.listen(8080, function () {
  console.log('server listening on port 8080')
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

