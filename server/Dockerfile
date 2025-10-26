FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source code and config
COPY . .
COPY config.env ../

# Build TypeScript to JavaScript
RUN npm run build

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership to non-root user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose the correct port (your server uses 5050)
EXPOSE 5050

# Start the application
CMD ["node", "dist/server.js"]