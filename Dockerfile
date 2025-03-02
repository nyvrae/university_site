FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN pnpm install 

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"] 