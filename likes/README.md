# Microservice Milestone 3: Integration

This microservice was created by Thuccy Nguyen.

## Overview

This microservice handles liking a post, updates the number of total likes of a posts, and verifying that a user only likes a post once and that they are logged in. The purpose of this microservice is to allow users to further interacts with posts to give a more immersive experience. 

The microservice utilizes the event bus architecture and listens for PostCreated events to get the post ID and map that to the total number of likes in a post and a liked status to ensure that a user's like only counts once. 

## API end-points

| route            | access      | description                          | status codes |
| -----------------| ------------| ------------------------------------ |--------------|
| /posts/:id/like  | active-user | likes posts                          | 200          |
| /events          | all         | retrieves and parses events.         | 200          |


## Event Bus Messages

| type          | data                   | action                               |  role    |
| --------------| -----------------------| ------------------------------------ |----------|
| PostCreated   | id                     | adds post to list indexed by ID      | received |
| PostLiked     | id, total_likes, liked | updates total likes of posts         | sent     |



## How to Build

This microservice is built with Nodejs and is packaged by npm. It requires these dependencies:
- express
- cors
- nodemon
- axios

It can be run on a command line terminal with the script: nodemon index.js 



