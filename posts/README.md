# Microservice Milestone 3: Integration

This microservice was created by Jessica Green

## Overview

This microservice handles creating a post for a user that is logged into our system. Each post is unique to their user, so the posts for each user are stored together and each post has its own unique id created. This microservice also stores the user's id, the post's id, as well as the content of the post. It also uses the event bus architecture to send a postcreated event to the various different events. 

## API end-points


### GET requests

These routes return a status code of 200 when successfully completed and return the data structure of posts or a specific user's posts, using their unique userID.

| route           | description                                               | status codes |
| ----------------|-----------------------------------------------------------|--------------|
| /user/:id/posts | get the posts for a specific user                         | 200          |
| /posts          | get all the posts that have been created by all the users | 200          |

### POST requests

These routes return a status code of 200 when successfully completed. /user/:id/create takes in the content of the post and the user id, creates a unique ID number for that new post and returns the current user and their posts as an object with their post id and the content of the post upon successful creation. /events is the listener for the event buz

| route            | description                                                                                                                       | status codes | 
| -----------------|---------------------------------------------------------------------------------------------------------------------------------- |--------------|
| /user/:id/create | creates a news post entry for a user and sends the new post information to be stored and sends postCreated event to the event bus | 200          |
| /events          | listens for events                                                                                                                | 200          |

## Event Bus Messages

| type          | data                   | action                                 |  role    |
| --------------| -----------------------| -------------------------------------- |----------|
| PostCreated   |userId, postId, content | updates list of posts by a specific user| sent     |

## How to Build

This microservice is built with Nodejs and is packaged by npm. It requires these dependencies:
- express
- cors
- nodemon
- axios
- crypto

It can be run on a command line terminal with the script: nodemon index.js