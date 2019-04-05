FROM node:8

WORKDIR /home/ec2-user/AutomotiveApp/Backend

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
CMD [ "npm","start" ]
