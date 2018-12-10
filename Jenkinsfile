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
                sh "yarn unit:test" 
                step([
                    $class: 'CloverPublisher',
                    cloverReportDir: 'coverage',
                    cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 80, conditionalCoverage: 80, statementCoverage: 80],
                    unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                    failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
                ])
            } 
        } 
        stage("Build") {
            sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
            sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
        }
        build job: 'DeploymentAWS', parameters: [[$class: 'StringParameterValue', name: 'GIT_COMMIT', value: "${git.GIT_COMMIT}"]]   
    }
}

