node {
    def git = checkout scm

    stage("Build") {
        sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
        sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
    }
    
    stage("Clean") {
        sh "git clean -dfxq"
        sh "git stash"
    }

    stage("lint") {
        sh "npm install"
        sh "npm run eslint"
    }
}

