#!/bin/bash
set -e 

GIT_COMMIT=$1

docker build -t isabellaf16/hgop-api:$GIT_COMMIT ./game-api
docker build -t isabellaf16/hgop-client:$GIT_COMMIT ./game-client
