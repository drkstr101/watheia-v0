const analyzer = require('@next/bundle-analyzer');
const withNx = require('@nrwl/next/plugins/with-nx');
// const withPreact = require('next-plugin-preact');
const withPWA = require('next-pwa');
const transpiler = require('next-transpile-modules');
const sourcebit = require('sourcebit');

const sourcebitConfig = require('../../sourcebit.js');
sourcebit.fetch(sourcebitConfig);

const withBundleAnalyzer = analyzer({
  enabled: process.env['ANALYZE'] === 'true'
});

/**
 * camel-case style names from css modules
 * @param {*} config
 * @returns
 */
const webpack = (config) => {
  config.module.rules
    .find(({ oneOf }) => !!oneOf)
    .oneOf.filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
    .reduce((acc, { use }) => acc.concat(use), [])
    .forEach(({ options }) => {
      if (options.modules) {
        options.modules.exportLocalsConvention = 'dashes';
      }
    });

  return config;
};

const HOME_URL = process.env['HOME_URL'] ?? 'http://localhost:4200';

const pwa = {
  disable: process.env['NODE_ENV'] === 'development',
  sw: `sw.js`,
  cacheOnFrontEndNav: true // warning: may cause additional network request
};

const images = {
  domains: [
    'www.datocms-assets.com',
    'images.unsplash.com',
    'localhost' // For Strapi
  ],
  imageSizes: [24, 64, 128]
};

/**
 * @type {WithNxOptions}
 **/
const nextConfig = {
  // Serve the app in a sub-route
  basePath: '/blog',

  // Prefer loading of ES Modules over CommonJS
  experimental: {
    // concurrentFeatures: true,
    esmExternals: true
  },
  // minify output
  swcMinify: true,
  // webpack,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  env: { HOME_URL },

  images,
  pwa,
  webpack
};

// note: withTM didn't seem to work with `next-compose-plugins`,
//       so we must compose them manually here using withTM as
//       the outermost call
module.exports = withNx(withBundleAnalyzer(withPWA(nextConfig)));
