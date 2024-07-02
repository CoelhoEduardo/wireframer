FROM node:21-alpine

RUN mkdir /app

WORKDIR /app

COPY src/server/package.json src/server/package-lock.json ./

RUN npm install 

COPY src/ .

EXPOSE 3000

CMD ["node", "server/server.js"]
