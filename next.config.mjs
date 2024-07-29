import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  images: {
    domains: ['cdn.akamai.steamstatic.com'],
  },
};

export default withPWA(nextConfig);
