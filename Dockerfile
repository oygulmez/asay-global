# Multi-stage minimal Next.js production image
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
# Static export klasörünü kopyala (Next.js output: 'export')
COPY --from=builder /app/out ./out
# Gereken minimum dosyalar
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
# Static export'u serve ile yayınla
CMD ["sh","-lc","npx --yes serve@latest out -l 3000"]


