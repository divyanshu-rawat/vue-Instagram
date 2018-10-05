FROM node:8 as builder

COPY . /tmp/app
WORKDIR /tmp/app

RUN npm install && npm run build

FROM nginx:1.14.0-alpine

COPY --from=builder /tmp/app/dist /usr/share/nginx/html
