/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static-interactive-resmue.vercel.app',  // For About section image
        },
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',            // For skill icons from flaticon
        },
        {
          protocol: 'https',
          hostname: 'w7.pngwing.com',                        // For Tailwind CSS and React images
        },
        {
            protocol : 'https',
            hostname : 'upload.wikimedia.org'
        },
        {
          protocol: 'https',
          hostname: 'static-00.iconduck.com',                // For Next.js icon
        },
      ],
    },
  };
  
  export default nextConfig;
  