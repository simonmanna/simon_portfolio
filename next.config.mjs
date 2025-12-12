// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        // Check if the host is the subdomain
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'grandhub.vidapals.com', // Your new subdomain
          },
        ],
        // Rewrite the request to the desired path on your Vercel app
        destination: '/grandhub/:path*', // The folder/page you want to show
      },
    ]
  },
}