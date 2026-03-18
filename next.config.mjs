/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.xn--landhaus-cker-4ob.de",
      },
    ],
  },
}

export default nextConfig
