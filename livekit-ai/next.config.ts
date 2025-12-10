import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 1. 告訴 Next.js 我們要匯出成靜態 HTML
  output: 'export',

  // 2. 因為 S3 是靜態的，無法執行 Next.js 的圖片優化伺服器
  // 如果你不加這行，用了 <Image /> 元件的地方可能會報錯
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
