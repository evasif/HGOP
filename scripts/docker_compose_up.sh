#!/bin/bash

export GIT_COMMIT=$1
docker-compose down --detached
docker-compose up --detached