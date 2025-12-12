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

  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "grandhub.vidapals.com" }],
        destination: "/grandhub/:path*",
      },
    ];
  },
};

export default nextConfig;
