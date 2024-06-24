FROM node:20
WORKDIR /app
COPY package*.json /app/
RUN npm cache clean --force
RUN npm install
COPY . .
CMD ["npm", "start"]
#CMD ["/bin/sleep","infinity"]
