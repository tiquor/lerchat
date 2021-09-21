FROM node:16

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000

CMD [ "yarn", "dev" ]