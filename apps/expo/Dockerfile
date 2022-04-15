ARG http.port=4200
ARG app.name=expo
FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY dist/apps/${app_name} /app

RUN yarn install

ENV PORT=${http_port}
EXPOSE ${PORT}

ENV PORT ${PORT}

CMD ["yarn", "start", "--port=${PORT}"]
