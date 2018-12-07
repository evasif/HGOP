#!/bin/bash

export GIT_COMMIT=$1
docker-compose down --detach
docker-compose up --detach