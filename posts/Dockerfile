# pull the Node Docker image
FROM node:current-alpine3.12

# Create the directory inside the container for the app
WORKDIR /usr/app

# Copy configuration files to the container
COPY package.json .

# Install libraries
RUN npm install --quiet

# Copy the code into the container
COPY . .

# our app is running on port 4000 within the container, so need to expose it
EXPOSE 4004

# the command that starts our app
CMD ["npm", "start"]