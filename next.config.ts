import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rules: {
    'import/no-anonymous-default-export': 'off'
  }
};

export default nextConfig;
