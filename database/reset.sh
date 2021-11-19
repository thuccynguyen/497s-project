#! /bin/bash

docker stop db-container
docker rm db-container
docker image rm db

rm -rf data/*

docker build -t db .

docker run -d --name db-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -v $(pwd)/data/:/var/lib/postgressql/data -p 5432:5432 db