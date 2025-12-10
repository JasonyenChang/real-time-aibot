# 1. 使用 Node.js 18 Alpine (支援 corepack)
FROM node:20-slim

# 2. 啟用 pnpm (Node 16+ 內建 corepack，但預設未啟用)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 3. 複製設定檔 (利用 Docker 快取機制)
# 注意：一定要複製 pnpm-lock.yaml 以確保版本一致
COPY package.json pnpm-lock.yaml ./

# 4. 安裝依賴 (使用 frozen-lockfile 確保完全依照 lock 檔安裝)
RUN pnpm install --frozen-lockfile

# 5. 複製所有的程式碼
# 我們先把程式碼複製進去，再跑 download-files，以免該腳本依賴某些專案內的設定檔
COPY . .

# 6. 執行關鍵步驟：下載檔案
# 這一步會發生在 "建置映像檔 (Build)" 的時候，而不是 "啟動 (Run)" 的時候
# 這樣可以確保映像檔裡面已經包含下載好的檔案，啟動速度會比較快
RUN pnpm download-files

# 7. 設定啟動指令
CMD ["pnpm", "dev"]