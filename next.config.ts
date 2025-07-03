
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  // "output" : "export"

  experimental: {
    turbo: false, // Disable Turbopack
  },
 
  redirects : async()=>{
    return [
      {
        source : '/redirection/1',
        destination : '/',
        permanent : false
      },
      {
        source : '/redirection/:dynamicRedirection', // for dynamice routes
        destination : '/',
        permanent : false
      }
    ]
  }

};

module.exports = nextConfig; // ✅ Correct way to export in CommonJS