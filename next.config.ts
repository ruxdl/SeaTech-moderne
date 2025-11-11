import type { NextConfig } from "next";

const isGithubPages = process.env.NEXT_PUBLIC_BASE_PATH === '/SeaTech-moderne';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(isGithubPages && {
    basePath: '/SeaTech-moderne',
    assetPrefix: '/SeaTech-moderne',
  }),
  images: {
    unoptimized: true
  },
  reactCompiler: true,
};

export default nextConfig;
