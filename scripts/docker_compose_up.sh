#!/bin/bash

export GIT_COMMIT=$1
export ENVIRONMENT=$2
export API_IP=$3

docker-compose down
docker-compose up -d