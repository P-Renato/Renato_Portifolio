FROM node:18-alpine as build

WORKDIR /app

# Copy package files first (better Docker caching)
COPY package*.json ./
COPY next.config.ts ./
COPY tsconfig.json ./
COPY components.json ./
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./

# Install dependencies
RUN npm install

# Copy ONLY source code (exclude node_modules and build artifacts)
COPY src/ ./src/
COPY public/ ./public/

# Build the Next.js app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built app from build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3001

CMD ["npm", "start"]