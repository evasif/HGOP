#!/bin/bash

export GIT_COMMIT=$1

#docker-compose down isabellaf16/hgop-api:$GIT_COMMIT 
#docker-compose up isabellaf16/hgop-api:$GIT_COMMIT 
#docker-compose down isabellaf16/hgop-client:$GIT_COMMIT 
#docker-compose up isabellaf16/hgop-client:$GIT_COMMIT 

docker-compose down
docker-compose up -d
