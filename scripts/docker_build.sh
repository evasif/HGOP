#!/bin/bash
set -e 

GIT_COMMIT=$1
ENVIRONMENT=$2
API_IP=$3

docker build -t isabellaf16/hgop-api:$GIT_COMMIT ./game-api
docker build -t isabellaf16/hgop-client:$GIT_COMMIT ./game-client
