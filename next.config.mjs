import withPWA from 'next-pwa';

const nextConfig = {
  images: {
    domains: ['cdn.akamai.steamstatic.com'],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};

export default withPWA(nextConfig);
