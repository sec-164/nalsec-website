/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  // basePath: isProduction ? "/nalsec-website" : "",
  basePath: isProduction ? "" : "",
  // assetPrefix: isProduction ? "/nalsec-website" : "",
  assetPrefix: isProduction ? "" : "",
  experimental: {
    // appDir: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
