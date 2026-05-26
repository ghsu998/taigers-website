import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/taigers-website" : "",
  trailingSlash: true,
};

export default nextConfig;
