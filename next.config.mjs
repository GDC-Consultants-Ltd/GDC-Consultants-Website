// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      `${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.fs1.hubspotusercontent-na1.net`, // Dynamically use the HubSpot portal ID from .env
    ],
  },
};

export default nextConfig;
