// Core
const merge = require('webpack-merge');


// Common
const common = require('./webpack.common');


// Utility
const { root } = require('./webpack.utils');


/**
 * Development configuration utilizes ebpack-dev-server with hot reloading.
 * Port is configurable via CLI. Asset source is also predefined inside this configuration.
 */
module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devServer: {
        port: 8000,
        hot: true,
        inline: true,
        contentBase: root('./src/assets'),
    },
});
