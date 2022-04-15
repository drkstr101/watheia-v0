ARG http_port=4200
ARG app_name=home
FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY dist/apps/${app_name} /app

RUN yarn install

EXPOSE ${http_port}

ENV PORT=${http_port}
CMD ["yarn", "start", "--port=${PORT}"]
