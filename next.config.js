/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for Cloudflare Pages (publish the `out` folder)
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
