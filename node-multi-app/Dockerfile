FROM node:25-alpine3.22

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY ./ ./

CMD ["npm","start"]
