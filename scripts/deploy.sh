#!/bin/bash -xe
# 1 ==> file to check for the ssh key
# 2 ==> user type
# 3 ==> ip address of the server
# 4 ==> project  to copy and paste to the server
# 5 ==> destination project  to copy and paste to the server
# 6 ==> file that runs several scripts
# 7 ==> destination file in the server
# 8 ==> domain name
ssh-keyscan -H $IP >>~/.ssh/known_hosts
ssh $USER@$IP  "./dockerPullFrontEnd.sh"
