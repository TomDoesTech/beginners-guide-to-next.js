/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
    loader: "custom",
    path: "/",
  },
};
