FROM node:12.16-alpine

WORKDIR /fractal

COPY package.json package-lock.json /fractal/

RUN npm ci
