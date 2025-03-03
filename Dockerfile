FROM node:18-alpine AS base

# Установка зависимостей
FROM base AS deps
WORKDIR /app

# Установка pnpm
RUN npm install -g pnpm

# Копирование только файлов зависимостей
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Сборка приложения
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm
RUN pnpm build

# Финальный образ
FROM base AS runner
WORKDIR /app

# Копирование только необходимых файлов
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"] 