node {
    def git = checkout scm

    stage("Commit") {
    
        steps {
            //Clean 
            sh "git clean -dfxq"
            sh "git stash"

            //Setup
            sh "cd game-api"
            sh "npm install"

            //Lint
            sh "npm run eslint" 

            //Tests
        }
    }

    stage("Deploy") {
        stage("Build") {
            sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
            sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
        }   
    }
}

