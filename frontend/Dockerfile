FROM node:16-alpine
WORKDIR /app

COPY . .

# building the app
RUN npm install --frozen-lockfile
RUN npm run build

# Running the app
EXPOSE 3000
CMD [ "npm", "start" ]
