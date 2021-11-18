#! /bin/bash

docker stop db-container
docker rm db-container
docker image rm db

rm -rf postgres-data/*

docker build -t db .

docker run -d --name db-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -v $(pwd)/postgres-data/:/var/lib/postgressql/data -p 5432:5432 db