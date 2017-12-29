const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!\/__)/],
    stripPrefix: 'dist',

  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'Noodles-Hub',
        filename: 'service-worker.js',
        stripPrefix: 'dist/assets',
        staticFileGlobs: [
          'dist/index.html',
          'dist/**.js',
          'dist/**.js'
        ],
        mergeStaticsConfig: true
      }
      )]
};
