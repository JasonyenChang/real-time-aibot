# ===============================
# Backend Dockerfile (TypeScript build + production run)
# ===============================

# --- Step 1: Build Stage ---
FROM node:22-alpine AS build

WORKDIR /app

# 先複製 package 檔案（可利用 cache）
COPY package*.json ./

# 安裝所有依賴（包含 devDependencies）
RUN npm install

# 複製原始碼並編譯 TypeScript
COPY . .
RUN npm run build

# --- Step 2: Runtime Stage ---
FROM node:22-alpine

WORKDIR /app

# 僅安裝 production 依賴
COPY package*.json ./
RUN npm install --production

# 從 build 階段複製編譯後的 dist 檔案
COPY --from=build /app/dist ./dist

# 設定環境變數與埠號
ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001

# 啟動應用程式
CMD ["npm", "run", "start"]
