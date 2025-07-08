FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

CMD ["sh", "-c", "node app.js"]

EXPOSE 3000