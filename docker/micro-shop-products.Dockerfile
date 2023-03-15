FROM node:lts-alpine
WORKDIR /usr/products
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm",  "start"]
