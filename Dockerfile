FROM node:12.16-alpine

WORKDIR /fractal

COPY package.json yarn.lock /fractal/

RUN yarn install --pure-lockfile
