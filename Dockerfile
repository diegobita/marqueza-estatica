FROM node:18.12-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

FROM node:18.12-alpine
WORKDIR /app

COPY --from=builder /app/dist /app/package.json ./
COPY /public ./public

ENV NODE_ENV production
RUN npm install

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]

