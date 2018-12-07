# A configuration for the aws provider we have created. 
# We specify where the provider can find the credentials run commands on AWS.
provider "aws" {
  shared_credentials_file = "~/.aws/credentials"
  region                  = "us-east-1"
}

# We provide a security group resource. 
# In ingress we specify our rules, i.e. the instance should run on the open port 22. 
# It should run on localhost 3000.
resource "aws_security_group" "game_security_group" {
  name = "GameSecurityGroup"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Here we are creating an instance using the Amazon Machine Image, i.e. specifying our instance type t2.micro.
# We created a KeyPair with the name GameKeyPair. 
resource "aws_instance" "game_server" {
  ami                    = "ami-0ac019f4fcb7cb7e6"
  instance_type          = "t2.micro"
  key_name               = "GameKeyPair"
  vpc_security_group_ids = ["${aws_security_group.game_security_group.id}"]

  tags {
    Name = "GameServer"
  }

  # Here we are copying our script from the machine executing Terraform to the newly created resource. 
  # We are connecting to a resource with ssh using our GameKeyPair. 
  provisioner "file" {
    source      = "scripts/initialize_game_api_instance.sh"
    destination = "/home/ubuntu/initialize_game_api_instance.sh"

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = "${file("~/.aws/GameKeyPair.pem")}"
    }
  }

  # Here we are copying our docker compose file from the machine executing Terraform to the newly created resource.
  # We are connecting to a resource with ssh using our GameKeyPair. 
  provisioner "file" {
    source      = "docker-compose.yml"
    destination = "/home/ubuntu/docker-compose.yml"

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = "${file("~/.aws/GameKeyPair.pem")}"
    }
  }

  provisioner "file" {
    source      = "scripts/docker_compose_up.sh"
    destination = "/home/ubuntu/docker_compose_up.sh"

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = "${file("~/.aws/GameKeyPair.pem")}"
    }
  }

  # This is used to run commands on the instance we just created.
  # Terraform does this by SSHing into the instance and then executing the commands.
  # Since it can take time for the SSH agent on machine to start up we let Terraform
  # handle the retry logic, it will try to connect to the agent until it is available
  # that way we know the instance is available through SSH after Terraform finishes.

  # We are invoking our script on a remote resource, where we are making it executable.
  provisioner "remote-exec" {
    inline = [
      "chmod +x /home/ubuntu/initialize_game_api_instance.sh",
    ]

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = "${file("~/.aws/GameKeyPair.pem")}"
    }
  }
}

# Here we are defining an output to show us the public IP address. 
output "public_ip" {
  value = "${aws_instance.game_server.public_ip}"
}
