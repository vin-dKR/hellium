/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ucarecdn.com'
            }
        ]
    },
    crossOrigin: 'anonymous',
    // experimental: {
    //     urlImports: {
    //         allowedUris: [
    //             'https://hellium.vercel.app/',
    //             'https://hellium-git-main-vinod-krs-projects.vercel.app',
    //             'https://fonts.googleapis.com/**',
    //         ]
    //     }
    // },
};

export default nextConfig;
