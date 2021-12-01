# Microservice Milestone 3: Integration

This microservice was created by Thuccy Nguyen

## Overview 

The event bus microservice sends out incoming Event objects containing the type of event, and the event data, to all microservices that are subscribed to it. This microservice is important because it creates a distributed systems architecture that allows for easily adding microservices and allowing them to communicate with each other.

## Event Bus Subscribers

| port  | service           |
| ------| ------------------|
| 4000  | auth              |
| 4001  | createUser        |
| 4002  | validateAccount   |
| 4003  | manageUserState   |
| 4004  | createPost        |
| 4005  | addComment        |
| 4006  | manageUserState   |
| 4008  | comments-db       |

## How to Build

This microservice is built with Nodejs and is packaged by npm. It requires these dependencies:
- express
- nodemon
- axios

It can be run on a command line terminal with the script: nodemon index.js 

