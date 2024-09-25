/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lethamduong.edu.vn",
                port: "",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
            },
        ],
    },
};

export default nextConfig;
