FROM node:latest
WORKDIR /code
COPY package.json package.json
RUN npm install --production
COPY . .
CMD ["npm", "start"]
