FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache git \
  && cd /app \
  && git clone https://github.com/zhcndoc/vueuse.git . \
  && npm i -g pnpm \
  && pnpm install \
  && pnpm run docs:build

EXPOSE 3000

WORKDIR /app

CMD ["pnpm", "vitepress", "serve", "packages", "--port", "3000"]
