FROM node:18.12-alpine AS build
WORKDIR /usr/src/app

# 👌
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
#Default command
CMD ["npm","run","dev"]