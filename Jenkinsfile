node {
    def git = checkout scm

    stage("Commit") {
        stage("Clean") {
            sh "git clean -dfxq"
            sh "git stash"
        }
        stage("Setup") {
            sh "cd game-api"
            sh "npm install"
        }
        stage("Lint") {
            sh "npm run eslint" 
        }
        stage("Test") {
        
        }
    }

    //
    stage("Deploy") {
        stage("Build") {
            sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
            sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
        }   
    }
    
   

   

    
}

