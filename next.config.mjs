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

  // This works perfectly when grandhub.vidapals.com is added to THIS project
  async rewrites() {
    return [
      // grandhub subdomain → /grandhub folder (clean URLs)
      {
        source: "/:path*",
        has: [{ type: "host", value: "grandhub.vidapals.com" }],
        destination: "/grandhub/:path*",
      },
      // Make sure root also works
      {
        source: "/",
        has: [{ type: "host", value: "grandhub.vidapals.com" }],
        destination: "/grandhub",
      },
    ];
  },
};

export default nextConfig;