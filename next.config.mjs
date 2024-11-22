/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ucarecdn.com'
            }
        ]
    },
    experimental: {
        transparentFrames: true,
    },
};

export default nextConfig;
