/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    customKey: "77",
    apiMail: "https://larux.ru:7721/",
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "",
  //       hostname: "",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
