/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tyrfggjtfqaldwemrusm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
  // output: "export", // static site generation (SSG) for deploying app
};

export default nextConfig;
