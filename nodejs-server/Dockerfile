#specify a base image
FROM node:24-alpine3.22

WORKDIR /usr/app
#copying package.json file to container
COPY ./ ./
#download and install dependencies
RUN npm install
RUN apk

#tell the image what to do when it starts as a container
CMD ["npm","start"]