FROM node:alpine as base

# Create app in directory
WORKDIR /usr/src/app

COPY ./package.json ./

EXPOSE 8090


FROM base as dev

RUN npm config set unsafe-perm true && npm install -g nodemon

RUN npm install

COPY . .

CMD ["npm", "start"]

FROM base as prod

RUN npm install --production
