FROM node:8.15-alpine

WORKDIR /app/study-hall-client

COPY package.json /app/study-hall-client

RUN npm install

COPY . /app/study-hall-client

CMD ["npm", "start"]

EXPOSE 3000
