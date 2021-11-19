# Microservice Milestone 3: Integration

This microservice was created by Johan Thomas Sajan

## Overview

This microservice handles creating a comment for a particular post. Each comment is tied to a post and so when there is a comment created for a particular post, a unique comment ID is generated for that post. The microservice also retrives the comments for a particular post and also retrieves the comments for all the posts. It also uses the event bus architecture to send a CommentCreated event to the other events. 

## API end-points


### GET requests

These routes return a status code of 200 when successfully completed and returns either the comments for a particular post using the ID for that post or the comments for all the posts.

| route           | description                                               | status codes |
| ----------------|-----------------------------------------------------------|--------------|
| /posts/:id/comments | get the comments for a particular post                     | 200          |
| /comments          | get the comments for all the posts | 200          |

### POST requests

These routes return a status code of 200 when successfully completed. /posts/:id/comments takes in the content of the comment, creates a unique ID for that comment and returns the ID of the comment, the ID of that post that it is tied to, the content of the comment itself and a status message that states that the comment has been created. current user and their posts as an object with their post id and the content of the post upon successful creation. /events is the listener for the event bus.

| route            | description                                                                                                                       | status codes | 
| -----------------|---------------------------------------------------------------------------------------------------------------------------------- |--------------|
| /posts/:id/comments | creates a new comment and sends a message to the event bus that a comment has been created | 200          |
| /events          | listens for events for the event bus                                                                                                                | 200          |

## Event Bus Messages

| type          | data                   | action                                 |  role    |
| --------------| -----------------------| -------------------------------------- |----------|
| CommentCreated   |commentId, postId, comment, status | updates the list of comments for a particular post| sent     |

## How to Build

This microservice is built with Node.js and is packaged by npm. It requires these dependencies:

- express
- cors
- axios
- crypto

It can be run on a command line terminal with the script: npm start
