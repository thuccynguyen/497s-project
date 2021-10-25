# Microservice Milestone 2: createAccount

This microservice was developed by Jessica Green

## Overview

This microservice is intended to create a user who has logged in to our application. This microservice stores the user information in an array, but eventually a database. It allows you to get
the users' username and password, as well as the unique ID that identifies each of the users that have already been created.
Additionally, this service allows you to create a new user and store their username, password, and creates a unique ID to identify that user.

## API end-points


### GET requests

These routes return a status code of 200 when successfully completed and return the data structure of users or a specific user, using their unique ID.

| route         | description                          | status codes |
| --------------|--------------------------------------|--------------|
| /create/:id   | get user based on ID or full array   | 200          |

### POST requests

These routes return a status code of 200 when successfully completed. /create takes in the username and password, creates a unique ID number for that new user and returns the current user as an object with their id, username, and password upon successful creation. 

| route         | description                                | status codes | 
| --------------|------------------------------------------- |--------------|
| /create       | send the new user information to be stored | 200          |


