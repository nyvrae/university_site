# Базовый образ Node.js
FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование остальных файлов проекта
COPY . .

# Открытие порта
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"] 