# Microservice Milestone 2: manageUserState

This microservice was developed by Thuccy Nguyen.

## Overview
The purpose of this microservice is to handle all functionality regarding the state of the current user. This microservice handles the login/logout functionality
in a user session, and updates the value for the state of the current user, and the acount information of the current user. This information is defaulted to empty
as the default state of a user is a guest user, until they login and become an active user. 

When a user is a guest user, they have limited functionality of the application. Since this is a prototype, this behavior has been recreated through the /restricted
page which only allows access to 'active-users' and not to 'guest-users'. 

This microservice also allows for the retrieval of all current user information: state, id, and password.

## API end-points


### GET requests

These routes return a status code of 200 when successfully completed and return a string as a response to these get requests. A guest user will receieve a 403 status code if they try to access the /restricted route. 

| route         | access      | description                          | status codes |
| --------------| ------------| ------------------------------------ |--------------|
| /user/status  | all         | get current user status              | 200          |
| /user/account | all         | get current user account information | 200          |
| /restricted   | active-user | no guest access                      | 200,  403    |

### POST requests

These routes return a status code of 200 when successfully completed. /login takes in a id and password and returns the current user id upon successful login. /logout returns a string to notify that the user has been successfully logged out. 

| route         | access      | description                          | status codes | 
| --------------| ------------| ------------------------------------ |--------------|
| /login        | guest-user  | login to registered account          | 200          |
| /logout       | active-user | logout back to guest user            | 200          |

## Event Bus Messages

| type          | data               | action                               |  role    |
| --------------| -------------------| ------------------------------------ |----------|
| UserAuthorized| user, password     | logs user in and updates user state  | received |
| LoginAttempted| username, password | attemps authorization with data      | sent     |

## How to Build

This microservice is built with Nodejs and is packaged by npm. It requires these dependencies:
- express
- cors
- nodemon
- axios

It can be run on a command line terminal with the script: nodemon index.js 

