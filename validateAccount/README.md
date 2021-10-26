# Microservice Milestone 2: validateAccount

This microservice was developed by Johan Thomas Sajan.

## Overview
The purpose of this microservice is to make sure that the username inputted by the user is unique and is not the same as a username already within the system and will send a status code accordingly. This microservice will also check to make sure that the username and password inputted by the user are not null.

## API end-points


### GET requests

This route return a status code of 200 when successfully completed.

| route         | access      | description                          | status codes |
| --------------| ------------| ------------------------------------ |--------------|
| /users        | all         | gets all usernames & passwords       | 200          |

### POST requests

These routes return a status code of 200 when successfully completed. For the /validate/null route, a 400 response is sent if the inputted username and password are null and for the /validate/username route, a 400 response is sent if the inputted username is not unique.

| route         | access      | description                          | status codes | 
| --------------| ------------| ------------------------------------ |--------------|
| /validate/null        | all         | checks if inputted username and password are null         | 200, 400     |
| /validate/username  | all         | checks if inputted username is unique | 200, 400     |