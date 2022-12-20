/** @type {import('next').NextConfig} */

//const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const withTM = require("next-transpile-modules")([
  "@noir-lang/aztec_backend",
  "@noir-lang/barretenberg",
  "@noir-lang/noir_wasm",
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  /*webpack: (config) => {
    config.plugins.push( 
        new NodePolyfillPlugin()
    )

  return config;
  },*/
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    config.resolve.mainFields = ['browser', 'module', 'main'];

    // console.log(config.module.exports);
    // config.target = "web",

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
