/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',  // For Google profile images
      'avatars.githubusercontent.com'  // For GitHub profile images (if needed)
    ],
  },
}

module.exports = nextConfig