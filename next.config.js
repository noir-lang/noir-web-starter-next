/** @type {import('next').NextConfig} */

//const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const withTM = require('next-transpile-modules')(['@noir-lang/aztec_backend', '@noir-lang/barretenberg', '@noir-lang/noir_wasm']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*webpack: (config) => {
    config.plugins.push( 
        new NodePolyfillPlugin()
    )

  return config;
  },*/
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = withTM(nextConfig);
