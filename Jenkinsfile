node {
    def git = checkout scm
    // Commit stage
    stage("Commit") {
        stage("Clean") {
            sh "git clean -dfxq"
            sh "git stash"
        }
        dir("game-api") {
            stage("Setup") {
                sh "yarn install"
            }
            stage("Lint") {
                sh "yarn eslint" 
            }
            stage("Test") {
                sh "yarn test:unit" 
            }
        }
    }
    // Deploy stage, should build if everything is OK in commit stage
    stage("Deploy") {
        stage("Build") {
            sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
            sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
        }   
    }
    
   

   

    
}

