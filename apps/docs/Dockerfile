ARG http.port=42-0
ARG app.name=docs
FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY dist/apps/${app_name} /app

RUN yarn install

ENV PORT=${http_port}
EXPOSE ${PORT}

ENV PORT ${PORT}

CMD ["yarn", "start", "--port=${PORT}"]
