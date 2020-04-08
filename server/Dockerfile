FROM node:alpine as builder

WORKDIR /app

COPY ../client/package*.json ./

ENV NODE_ENV=production

RUN npm install

COPY ../client .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY --from=builder /app/build /app/build

EXPOSE 5000

CMD ["npm", "start"]

