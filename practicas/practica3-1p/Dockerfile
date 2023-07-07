FROM node:18.15.0 as deps
WORKDIR /app
COPY package*.json .
RUN npm install


FROM node:18.15.0 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test


FROM node:18.15.0 as prod-deps
WORKDIR /app
COPY package*.json .
RUN npm install --prod


FROM node:18.15.0 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY package*.json .
COPY controller/ ./controller
COPY models/ ./models
COPY routes/ ./routes
COPY app.js .
COPY .env .
CMD [ "npm", "start" ]