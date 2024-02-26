/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // images: ["oaidalleapiprodscus.blob.core.windows.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
