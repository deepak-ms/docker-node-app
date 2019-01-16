# docker-node-app
Simple Node.js app on Docker with docker -env

Available on docker hub so you can run this using docker pull

```# docker pull el173/node-hello```

To run the app

```# docker run -d -p 12346:8080 -e DB_HOST=1.1.1.1 el173/node-hello```
