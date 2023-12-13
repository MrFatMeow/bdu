const nextConfig = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
  // swcMinify: true,
  compiler: {
  },
  images: {
    domains: ["robohash.org", "res.cloudinary.com", "theme.hstatic.net"],
  },
};
module.exports = nextConfig;