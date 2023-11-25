FROM node:18-alpine AS base

# Install Dependencies
FROM base AS deps

WORKDIR /app

COPY package*.json .
RUN npm ci

# Build Application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Run Application
FROM nginxinc/nginx-unprivileged

COPY --from=builder /app/dist /usr/share/nginx/html
COPY .docker/default.conf /etc/nginx/conf.d/default.conf

USER root
RUN chgrp -R 0 /usr/share/nginx && chmod -R g=u /usr/share/nginx
USER nginx

EXPOSE 8080
