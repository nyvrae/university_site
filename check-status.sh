#!/bin/bash

echo "=== Статус Docker контейнеров ==="
docker-compose ps

echo -e "\n=== Проверка SSL сертификата ==="
sudo certbot certificates

echo -e "\n=== Проверка доступности приложения ==="
curl -I https://bdji.bsu.by

echo -e "\n=== Статус Nginx ==="
sudo systemctl status nginx | grep Active

echo -e "\n=== Последние ошибки в логах Nginx ==="
sudo tail -n 20 /var/log/nginx/error.log 