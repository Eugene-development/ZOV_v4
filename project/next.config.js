/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "77",
    apimail: "https://larux.ru:7721/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://avatars.dzeninfra.ru",
        port: "",
        pathname:
          "/get-zen_doc/9707955/pub_646a10017bd61e597f2efc50_646a100729bffd1d35f84376/",
      },
    ],
  },
};

module.exports = nextConfig;
