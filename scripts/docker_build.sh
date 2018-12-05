#!/bin/bash
set -e 

GIT_COMMIT=$1

cd game-api
docker build -t isabellaf16/hgop:$GIT_COMMIT .
