FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app
COPY dist/apps/docs /app

RUN yarn install

EXPOSE 4200

ENV PORT 4200

CMD ["yarn", "start", "--port=4200"]
