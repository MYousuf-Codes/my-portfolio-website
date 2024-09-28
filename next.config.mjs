/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',
        },
        {
          protocol: 'https',
          hostname: 'another-example.com',
        },
        // Add more hostnames for other image sources as needed
      ],
    },
  };
  
  export default nextConfig;
  