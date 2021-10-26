# Microservice Milestone 2: manageUserState

This microservice was developed by Zack Simonelli.

## Overview
The purpose of this microservice is to authenticate a user exists locally and the login information is correct. This microservice handles basic login authentication functionality
given a username and password this service will check a local object to see if the username and password exists in the object.

This microservice also allows for basic authentication.

## API end-points


### GET requests

These routes return a status code of 200 when successfully completed.

| route         | access      | description                          | status codes |
| --------------| ------------| ------------------------------------ |--------------|
| /users        | all         | gets all usernames & passwords       | 200          |

### POST requests

These routes return a status code of 201 when successfully completed. A 400 response is sent if the users object is empty
a 500 is sent if the password is not present.

| route         | access      | description                          | status codes | 
| --------------| ------------| ------------------------------------ |--------------|
| /user         | all         | pushes user to local object          | 201, 500     |
| /users/login  | all         | checks if user is present in object  | 400, 500     |

