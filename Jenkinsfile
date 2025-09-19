pipeline {
    agent any

    environment {
        TESTCAFE_CMD = 'npx testcafe chrome:headless ./ClickMenu.js --reporter html:report.html'
        REPORT_HTML = 'report.html'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
            }
        }

        stage('Run TestCafe Tests') {
            steps {
                script {
                    echo "Running TestCafe in headless mode..."
                    def status = bat(script: "${TESTCAFE_CMD}", returnStatus: true)
                    if (status != 0) {
                        error "❌ TestCafe tests failed with exit code ${status}"
                    }
                }
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    reportDir: '.',
                    reportFiles: "${REPORT_HTML}",
                    reportName: 'TestCafe HTML Report'
                ])
            }
        }
    }

    post {
        success {
            echo '✅ TestCafe tests passed!'
        }
        failure {
            echo '❌ TestCafe tests failed!'
        }
    }
}
