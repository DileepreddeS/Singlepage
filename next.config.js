/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  images: {
    domains: ['www.webopedia.com'],
  },

  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' *.youtube.com",
          },
        ],
      },
    ];
  },
};
