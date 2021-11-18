# pull the Node Docker image
FROM node

# Create the directory inside the container for the app
WORKDIR /497S-Project/auth

# Copy configuration files to the container
COPY ./package.json ./
COPY ./package-lock.json ./

# Install libraries
RUN npm install

# Copy the code into the container
COPY . /index.js 

# our app is running on port 4000 within the container, so need to expose it
EXPOSE 4000

# the command that starts our app
CMD ["npm", "run", "start_server"]