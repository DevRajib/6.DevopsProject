# Use an official Node.js image for the build process
FROM node:14 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Use an Nginx image to serve the React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
