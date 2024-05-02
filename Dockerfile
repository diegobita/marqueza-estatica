FROM node:18.12-alpine

WORKDIR /app

COPY /dist /package.json ./
COPY /public ./public

ENV NODE_ENV production
RUN npm install

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]

