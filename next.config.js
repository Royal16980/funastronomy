/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.nasa.gov' },
      { protocol: 'https', hostname: 'science.nasa.gov' },
      { protocol: 'https', hostname: 'www.esa.int' },
    ]
  }
};
export default nextConfig;
