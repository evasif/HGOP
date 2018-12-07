# Initializing a new build stage and set base image for subsequent instructions  
# Creating a node image
FROM node:dubnium

# Set the working directory to /code
WORKDIR /code

# Copy package.json file into the environment
COPY package.json package.json

# Copy database.js file into the environment
COPY database.js database.js

# Copy app.js file into the environment
COPY app.js app.js

# Execute npm install
RUN npm install --production

# Providing defaults for an executing container
CMD node app.js
