/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  basePath: isProduction ? "/nalsec-website" : "",
  assetPrefix: isProduction ? "/nalsec-website" : "",
  experimental: {
    // appDir: true
  },
};

module.exports = nextConfig;
