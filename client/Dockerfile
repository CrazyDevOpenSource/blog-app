# Step 1: Build React App
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the React app with the environment variables
ARG REACT_APP_POSTS_SERVICE_ENDPOINT
ARG REACT_APP_COMMENTS_SERVICE_ENDPOINT
RUN REACT_APP_POSTS_SERVICE_ENDPOINT=$REACT_APP_POSTS_SERVICE_ENDPOINT REACT_APP_COMMENTS_SERVICE_ENDPOINT=$REACT_APP_COMMENTS_SERVICE_ENDPOINT npm run build

# Step 2: Serve the App using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]