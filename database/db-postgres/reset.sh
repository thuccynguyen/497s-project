#! /bin/bash

docker stop postgres-db-container
docker rm postgres-db-container
docker image rm postgres-db

rm -rf postgres-data/*

docker build -t postgres-db .

docker run -d --name postgres-db-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -v $(pwd)/postgres-data/:/var/lib/postgressql/data -p 5432:5432 postgres-db