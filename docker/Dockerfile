# pull official base image
FROM node:13.12.0-alpine as react_container

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install -g serve --save

# add the app
COPY . ./
