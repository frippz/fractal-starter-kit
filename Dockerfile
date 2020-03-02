FROM node:12.16-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --pure-lockfile
