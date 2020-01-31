/**
 * Bundling initialisation. Current project separates bundle confogirations in separate files
 * per environment. And by default Webpack is searching for 'webpack.config.js' within the root
 * directory. Rather than providing specific file, it was decided to keep the initialisation central.
 * @summary Bundler's root
 * @param {String} environment - Environment file
 * @returns {Object} Webpack configuration
 * @example
 * // webpack --env=sample -> require('./webpack.sample.js');
 * // webpack --env=production -> require('./webpack.production.js');
 * // webpack --env=development -> require('./webpack.development.js');
 */
const init = environment => (
    require(`./webpack.${environment}.js`)
);


module.exports = init;