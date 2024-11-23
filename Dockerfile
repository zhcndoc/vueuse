FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git \
  && cd /app \
  && git clone https://github.com/zhcndoc/vueuse.git . \
  && corepack enable \
  && pnpm install \
  && pnpm run docs:build

FROM caddy:2-alpine

COPY --from=builder /app/packages/.vitepress/dist /usr/share/caddy

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
