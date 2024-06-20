/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
      domains:['res.cloudinary.com','s2.coinmarketcap.com'],
    },
};

export default nextConfig;
