#!/bin/bash

sudo apt update
sudo apt install -y docker.io docker-compose

curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list
sudo apt update
sudo apt install -y ngrok

docker-compose up -d

ngrok config add-authtoken 2thhTZxrC1PtOk3GTT6Pb4EmK9W_47FGQ4wYRuGnskjeWDQ26

nohup ngrok http --domain=learning-wildcat-becoming.ngrok-free.app 80 > ngrok.log 2>&1 &

echo "Деплой завершен. Сайт доступен по адресу: https://learning-wildcat-becoming.ngrok-free.app" 