# Initializing a new build stage and set base image for subsequent instructions  
# Creating a node image
FROM node:dubnium

# Set the working directory to /code
WORKDIR /code

# Copy package.json file into the environment
COPY package.json package.json
#COPY package-lock.json package-lock.json

# Execute npm install
RUN npm install --production

# Copy app.js file into the environment
COPY app.js app.js
# Copy config.js file into the environment
COPY config.js config.js
# Copy context.js file into the environment
COPY context.js context.js
# Copy database.js file into the environment
COPY database.js database.js
# Copy dealer.js file into the environment
COPY dealer.js dealer.js
# Copy deck.js file into the environment
COPY deck.js deck.js
# Copy inject.js file into the environment
COPY inject.js inject.js
# Copy lucky21.js file into the environment
COPY lucky21.js lucky21.js
# Copy random.js file into the environment
COPY random.js random.js
# Copy server.js file into the environment
COPY server.js server.js
# Copy migrations into the environment
COPY migrations migrations
# Copy database into the environment
COPY database.json database.json

# Providing defaults for an executing container
CMD sleep 5 && npm run migratedb:pg && node app.js

