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

const withTM = transpiler([
  // '@adobe/react-spectrum',
  // '@react-spectrum/actiongroup',
  // '@react-spectrum/breadcrumbs',
  // '@react-spectrum/button',
  // '@react-spectrum/buttongroup',
  // '@react-spectrum/checkbox',
  // '@react-spectrum/combobox',
  // '@react-spectrum/contextualhelp',
  // '@react-spectrum/dialog',
  // '@react-spectrum/divider',
  // '@react-spectrum/form',
  // '@react-spectrum/icon',
  // '@react-spectrum/illustratedmessage',
  // '@react-spectrum/image',
  // '@react-spectrum/label',
  // '@react-spectrum/layout',
  // '@react-spectrum/link',
  // '@react-spectrum/listbox',
  // '@react-spectrum/menu',
  // '@react-spectrum/meter',
  // '@react-spectrum/numberfield',
  // '@react-spectrum/overlays',
  // '@react-spectrum/picker',
  // '@react-spectrum/progress',
  // '@react-spectrum/provider',
  // '@react-spectrum/radio',
  // '@react-spectrum/searchfield',
  // '@react-spectrum/slider',
  // '@react-spectrum/statuslight',
  // '@react-spectrum/switch',
  // '@react-spectrum/table',
  // '@react-spectrum/tabs',
  // '@react-spectrum/text',
  // '@react-spectrum/textfield',
  // '@react-spectrum/theme-dark',
  // '@react-spectrum/theme-default',
  // '@react-spectrum/theme-light',
  // '@react-spectrum/tooltip',
  // '@react-spectrum/view',
  // '@react-spectrum/well',
  // '@spectrum-icons/ui',
  // '@spectrum-icons/workflow'
]);

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

const HOME_URL =
  process.env['VERCEL_URL'] ??
  process.env['NEXT_PUBLIC_URL'] ??
  process.env['URL'] ??
  'http://localhost:4200';

const BLOG_URL = process.env['BLOG_URL'] ?? 'http://localhost:4210';
const DOCS_URL = process.env['DOCS_URL'] ?? 'http://localhost:4220';
const EXPO_URL = process.env['EXPO_URL'] ?? 'http://localhost:4230';
const SCREENPLAY_URL = process.env['SCREENPLAY_URL'] ?? 'http://localhost:4240';

const env = {
  HOME_URL,
  BLOG_URL,
  DOCS_URL,
  EXPO_URL,
  SCREENPLAY_URL
};

const rewrites = async () => {
  return [
    {
      source: '/:path*',
      destination: `/:path*`
    },
    {
      source: '/blog',
      destination: `${env.BLOG_URL}/blog`
    },
    {
      source: '/blog/:path*',
      destination: `${env.BLOG_URL}/blog/:path*`
    }
  ];
};

const pwa = {
  disable: process.env['NODE_ENV'] === 'development',
  sw: `sw.js`,
  cacheOnFrontEndNav: true // warning: may cause additional network request
};

const images = {
  domains: [
    'watheia.io',
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

  images,
  pwa,
  env,
  webpack,
  rewrites
};

// note: withTM didn't seem to work with `next-compose-plugins`,
//       so we must compose them manually here using withTM as
//       the outermost call
module.exports = withTM(withNx(withBundleAnalyzer(withPWA(nextConfig))));
