# We are using node version 8
FROM node:8

# Set the working directory within docker image
WORKDIR /var/lib/node

# Copy the package.json and package-lock.json into docker container
COPY package*.json ./

# Install the node dependencies
RUN npm install

# ---- NO NEED TO COPY ALL ----
# Then copy in all files in local dir into docker container (.js files)
# COPY . .

# Open port 8080 for access to API
EXPOSE 8080

# Run the node server
CMD [ "npm","start" ]
