FROM node:14-alpine as builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm run build



FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 4000
CMD ["npm", "run", "start:prod"]
