FROM node:14.15.4
RUN npm install --global gatsby-cli && gatsby telemetry --disable
WORKDIR /save
COPY ./package*.json ./
RUN npm install
