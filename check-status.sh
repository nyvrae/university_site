#!/bin/bash

echo "=== Статус Docker контейнеров ==="
docker-compose ps

echo -e "\n=== Логи Ngrok ==="
if [ -f ngrok.log ]; then
  tail -n 20 ngrok.log
else
  echo "Файл логов ngrok.log не найден"
fi

echo -e "\n=== Проверка доступности Ngrok ==="
if curl -s localhost:4040/api/tunnels > /dev/null; then
  NGROK_URL=$(curl -s localhost:4040/api/tunnels | grep -o '"public_url":"[^"]*' | grep -o 'https://[^"]*')
  echo "Ngrok туннель активен: $NGROK_URL"
else
  echo "Ngrok API недоступен. Возможно, Ngrok не запущен."
  echo "Проверьте процесс: ps aux | grep ngrok"
fi

echo -e "\n=== Проверка доступности приложения ==="
if curl -s -o /dev/null -w "%{http_code}" localhost:3000; then
  echo "Приложение доступно локально на порту 3000"
else
  echo "Приложение недоступно локально"
fi

echo -e "\n=== Проверка доступности через Nginx ==="
if curl -s -o /dev/null -w "%{http_code}" localhost:80; then
  echo "Nginx доступен локально на порту 80"
else
  echo "Nginx недоступен локально"
fi 