#!/bin/bash

GIT_COMMIT=$1

docker push isabellaf16/hgop:$GIT_COMMIT

# TODO exit on error if any command fails
