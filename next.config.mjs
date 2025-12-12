/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // This now works reliably on Vercel (2025)
  async rewrites() {
    return [
      // Handle grandhub.vidapals.com → /grandhub folder
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "grandhub.vidapals.com",
          },
        ],
        destination: "/grandhub/:path*",
      },
      // Make sure the root (/) also works
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "grandhub.vidapals.com",
          },
        ],
        destination: "/grandhub",
      },
    ];
  },
};

export default nextConfig;