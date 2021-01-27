FROM node:12.18.4
RUN npm install --global gatsby-cli && gatsby telemetry --disable
WORKDIR /save
COPY ./package*.json ./
RUN npm install
