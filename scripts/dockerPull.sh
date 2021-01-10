#!/bin/bash -x
# set -e
# ssh-keyscan -H $IP >>~/.ssh/known_hosts

# scp ./docker-compose.prod.yml $USER@$IP:.

# ssh $USER@$IP echo "docker-compose -f ./docker-compose.prod.yml up -d --build; docker network inspect lotus-blogs_default_default"

# 1 ==> file for docker to compose
# 2 ==> domain name

## install softwares
function installSoftware() {
    sudo apt install $1
}
function checkFirewallStatus() {
    echo "Checking if ufw is enabled..."
    case "$(systemctl is-active ufw)" in
    active) echo "ufw is active" ;;
    inactive) sudo systemctl enable ufw ; echo "ufw is active now" ;;
    *) echo "unkown status" ;;
esac
}
function installDocker(){
    sudo apt-get update -y
    sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key fingerprint 0EBFCD88
    sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) \
    stable"
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io -y
    apt  install docker-compose -y
}
function checkDockerStatus(){
    echo "Checking if docker exists..."
    case "$(systemctl is-active docker)" in
    active) echo "docker already exists" ;;
    inactive) installDocker ; systemctl start docker; systemctl enable docker; docker --version  ;;
    *) echo "unkown status" ;;
esac
}

function dockerBuild(){
    docker login
     echo "Composing your amazing images..."
        docker-compose pull client
        docker-compose up -d
}


checkFirewallStatus
checkDockerStatus
dockerBuild
