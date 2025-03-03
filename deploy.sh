#!/bin/bash

# Установка Docker и Docker Compose
sudo apt update
sudo apt install -y docker.io docker-compose

# Установка Ngrok
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list
sudo apt update
sudo apt install -y ngrok

# Создаем .env файл, если его нет
if [ ! -f .env ]; then
  echo "Создаем .env файл..."
  cat > .env << EOL
NEXT_PUBLIC_API_URL=https://learning-wildcat-becoming.ngrok-free.app
NODE_ENV=production
LOCAL_IP_VM=192.168.1.100
PUBLIC_IP_VM=79.170.109.29
DOMAIN=learning-wildcat-becoming.ngrok-free.app
EOL
fi

# Запуск Docker контейнеров
docker-compose up -d

# Настройка Ngrok
ngrok config add-authtoken 2thhTZxrC1PtOk3GTT6Pb4EmK9W_47FGQ4wYRuGnskjeWDQ26

# Проверяем, запущен ли уже ngrok
if pgrep -x "ngrok" > /dev/null; then
  echo "Ngrok уже запущен, перезапускаем..."
  pkill -f ngrok
fi

# Запуск Ngrok с использованием статического домена
nohup ngrok http --domain=learning-wildcat-becoming.ngrok-free.app 80 > ngrok.log 2>&1 &

echo "Деплой завершен. Сайт доступен по адресу: https://learning-wildcat-becoming.ngrok-free.app"
echo "Для просмотра логов Ngrok: cat ngrok.log" 