#!/bin/bash

JENKINS_URL="http://ec2-52-90-206-44.compute-1.amazonaws.com"

scp -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ~/.aws/credentials ubuntu@$ec2-52-90-206-44.compute-1.amazonaws.com:~/credentials
ssh -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ubuntu@$ec2-52-90-206-44.compute-1.amazonaws.com "sudo mv ~/credentials /var/lib/jenkins/.aws/credentials"
ssh -o StrictHostKeyChecking=no -i "~/.aws/JenkinsAWSKeyPair.pem" ubuntu@$ec2-52-90-206-44.compute-1.amazonaws.com"sudo chmod a+r /var/lib/jenkins/.aws/credentials"