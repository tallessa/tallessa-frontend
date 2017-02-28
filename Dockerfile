FROM node:7
WORKDIR /usr/src/app
RUN npm -gq install yarn && rm -rf /root/.npm
COPY package.json yarn.lock /usr/src/app/
RUN yarn install --pure-lockfile && rm -rf /root/.yarn-cache
COPY . /usr/src/app/
EXPOSE 8080

CMD ["node_modules/.bin/webpack-dev-server", "--host", "0.0.0.0"]