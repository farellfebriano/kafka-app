FROM nginx:alpine
RUN apk add --no-cache nodejs npm
RUN apk add nano
WORKDIR /usr/client-producer
RUN npm install kafka-node
COPY kafka-client.js .
