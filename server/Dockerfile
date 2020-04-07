FROM node:8.15-alpine

WORKDIR /app/study-hall-server

COPY package.json /app/study-hall-server

RUN npm install

COPY . /app/study-hall-server

CMD ["npm", "start"]

EXPOSE 5000
