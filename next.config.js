/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@noir-lang/aztec_backend",
  "@noir-lang/barretenberg",
  "@noir-lang/noir_wasm",
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.module.rules.push({
      test: /\.wasm$/,
      type: "asset/resource",
    });

    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
    };

    return config;
  },
};

module.exports = withTM(nextConfig);
