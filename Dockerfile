FROM node:11 as base

WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY rollup.config.js rollup.config.js
COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY .babelrc .babelrc
COPY ./src src/
RUN yarn install

########
# Lint #
########
FROM base as lint
CMD ["yarn", "lint"]

########
# Test #
########
FROM base as test
CMD ["yarn", "test"]

###########
# Publish #
###########
FROM base as publish
RUN yarn build:package

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

CMD ["npm", "publish"]


#################
# Deploy Docs #
#################
FROM base as deploy-docs
RUN yarn global add now@16.7.3

ARG NOW_TOKEN
ENV NOW_TOKEN=$NOW_TOKEN

CMD now --token $NOW_TOKEN -A now-docs.json --prod


