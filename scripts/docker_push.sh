#!/bin/bash
set -e 

GIT_COMMIT=$1
ENVIRONMENT=$2

docker push isabellaf16/hgop-api:$GIT_COMMIT 
docker push isabellaf16/hgop-client:$GIT_COMMIT 
