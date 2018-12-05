#!/bin/bash
set -e 

GIT_COMMIT=$1

docker push isabellaf16/hgop:$GIT_COMMIT
