# --- Stage 1: Build the React App ---
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
# This means npm install only runs if package.json changes
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the React app for production
# Ensure your package.json has a "build" script, e.g., "build": "vite build"
RUN npm run build

# --- Stage 2: Serve the Built App with Nginx ---
FROM nginx:alpine AS production

# Copy the Nginx configuration file (optional, but good practice)
# We'll create this next
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
