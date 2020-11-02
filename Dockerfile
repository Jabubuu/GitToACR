FROM node:12-alpine

WORKDIR /usr/src/app
COPY package.json .
RUN npm install expo-cli --global

EXPOSE 3000
CMD [ "npm", "start" ]

COPY . .
