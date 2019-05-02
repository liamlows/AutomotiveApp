# Here we set up the build for the NODE container, we simply set the working directory within docker
#   and then proceed to copy our package.json files and install necessary node modules.
# We also expose the port to our API, 8080, and specify our start up command.
# Docker compose handles all the cross platform persistence via volumes so we don't need to worry about
#   copying over any of the actual code files for the backend.

# We are using node version 8
FROM node:8

# Set the working directory within docker image
WORKDIR /var/lib/node

# Copy the package.json and package-lock.json into docker container
COPY package*.json ./

# Install the node dependencies
RUN npm install

# Open port 8080 for access to API
EXPOSE 8080

# Run the node server
CMD [ "npm","start" ]
