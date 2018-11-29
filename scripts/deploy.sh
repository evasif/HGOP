# Destroying any running Terraform managed instances
terraform destroy -auto-approve


# Creating a new instance using Terraform
terraform init 
terraform plan
terraform apply -auto-approve


# Run the initialization script on the new instance
ssh -o StrictHostKeyChecking=no -i "~/.aws/GameKeyPair.pem" ubuntu@$(terraform output public_ip) "./initialize_game_api_instance.sh"



