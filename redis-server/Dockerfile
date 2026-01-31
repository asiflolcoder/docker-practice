#use an existing image as a base
FROM alpine

#download and install dependencies
RUN apk add --update gcc
RUN apk add --update redis


#tell the image what to do when it runs as a container
CMD ["redis-server"]
