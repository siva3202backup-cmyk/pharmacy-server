pipeline {
  agent any
  tools { nodejs 'NodeJS-22' }
  stages {
    stage('Install') { steps { sh 'npm install' } }
    stage('Smoke Test') { steps { sh 'npm test' } }
    stage('Docker Build') { steps { sh 'docker build -t pharmacy-server:${BUILD_NUMBER} .' } }
  }
}
