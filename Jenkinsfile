node {
    def git = checkout scm

    def build() {
        stage("Build") {
            sh "./scripts/docker_build.sh ${git.GIT_COMMIT}"
            sh "./scripts/docker_push.sh ${git.GIT_COMMIT}"
        }
    }
    def clean() {
        stage("Clean") {
            git clean -dfxq
            git stash
        }
    }
    def lint() {
        stage("lint") {
            npm run eslint
        }
    }
}
